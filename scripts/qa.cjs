// Browser QA for the built site. Start a server first (npm run build && npm run preview),
// then run: npm run qa   (needs Playwright: npm i -D playwright && npx playwright install chromium)
// Checks every page in the sitemap at phone, tablet and desktop widths for console errors,
// horizontal overflow, broken images, broken internal links and accessibility issues (axe),
// and saves full-page screenshots to test-results/.
const { chromium } = require('playwright');
const { AxeBuilder } = require('@axe-core/playwright');
const fs = require('node:fs');

const BASE = process.env.BASE_URL || 'http://localhost:4321';
const VIEWPORTS = [
  { name: 'phone', width: 390, height: 844 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'desktop', width: 1440, height: 1000 },
];
const CHECK_EXTERNAL = process.argv.includes('--external');

(async () => {
  fs.mkdirSync('test-results', { recursive: true });
  const browser = await chromium.launch();
  const index = await (await fetch(`${BASE}/sitemap-0.xml`)).text();
  const paths = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  paths.push('/this-page-does-not-exist/');
  const problems = [];
  const links = new Set();

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    for (const path of paths) {
      const page = await context.newPage();
      const errors = [];
      page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
      page.on('pageerror', (e) => errors.push(String(e)));
      const res = await page.goto(BASE + path, { waitUntil: 'networkidle' });
      const status = res?.status();
      const expected = path.includes('does-not-exist') ? 404 : 200;
      if (status !== expected) problems.push(`${path}: HTTP ${status}, expected ${expected}`);
      // Scroll so lazy images load.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(300);
      const report = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        brokenImages: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.currentSrc || i.src),
        links: [...document.querySelectorAll('a[href]')].map((a) => a.href),
        h1: document.querySelectorAll('h1').length,
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content ?? '',
      }));
      // Same-page anchors (the skip link) aren't separate URLs; the 404 page's own URL is expected to 404.
      report.links.filter((l) => new URL(l).pathname !== path).forEach((l) => links.add(l.split('#')[0]));
      const tag = `${path} @${vp.name}`;
      if (report.overflow > 0) problems.push(`${tag}: horizontal overflow of ${report.overflow}px`);
      if (report.brokenImages.length) problems.push(`${tag}: broken images ${report.brokenImages.join(', ')}`);
      if (report.h1 !== 1) problems.push(`${tag}: ${report.h1} h1 elements`);
      if (!report.description) problems.push(`${tag}: missing meta description`);
      errors.forEach((e) => !path.includes('does-not-exist') && problems.push(`${tag}: console error ${e}`));
      const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
      axe.violations
        .filter((v) => ['serious', 'critical'].includes(v.impact))
        .forEach((v) => problems.push(`${tag}: axe ${v.id} (${v.impact}) x${v.nodes.length}: ${v.nodes[0].target}`));
      const file = `test-results/${(path.replace(/\//g, '_') || '_').replace(/^_|_$/g, '') || 'home'}-${vp.name}.png`;
      await page.screenshot({ path: file, fullPage: true });
      await page.close();
    }
    await context.close();
  }

  // Keyboard check: the skip link is the first focusable element.
  {
    const page = await browser.newPage();
    await page.goto(BASE + '/');
    await page.keyboard.press('Tab');
    const first = await page.evaluate(() => document.activeElement?.textContent?.trim());
    if (first !== 'Skip to content') problems.push(`keyboard: first Tab focused "${first}", expected the skip link`);
    await page.close();
  }

  // Internal links must resolve; external links are optional (--external).
  for (const href of links) {
    const url = new URL(href);
    if (url.protocol === 'mailto:') continue;
    const internal = url.origin === new URL(BASE).origin;
    if (!internal && !CHECK_EXTERNAL) continue;
    try {
      const r = await fetch(url, { method: internal ? 'GET' : 'HEAD', redirect: 'follow' });
      if (r.status >= 400 && !(r.status === 999 || r.status === 403 && !internal)) problems.push(`link ${href}: HTTP ${r.status}`);
    } catch (e) {
      problems.push(`link ${href}: ${e.message}`);
    }
  }

  await browser.close();
  console.log(`Checked ${paths.length} pages x ${VIEWPORTS.length} viewports, ${links.size} unique links.`);
  if (problems.length) {
    console.log(`\n${problems.length} problem(s):\n- ` + problems.join('\n- '));
    process.exitCode = 1;
  } else {
    console.log('No problems found. Screenshots are in test-results/.');
  }
})();
