// Prints which photos from src/data/photos.json are still missing.
// Usage: npm run photos   (add --md to print a Markdown table)
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, basename, join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const { photos } = JSON.parse(readFileSync(join(root, 'src/data/photos.json'), 'utf8'));
const exts = /\.(jpe?g|png|webp|avif)$/i;

const found = (file) => {
  const dir = join(root, 'src/assets', dirname(file));
  if (!existsSync(dir)) return null;
  return readdirSync(dir).find((f) => exts.test(f) && f.replace(exts, '') === basename(file)) ?? null;
};

const rows = Object.entries(photos).map(([key, p]) => ({ key, ...p, have: found(p.file) }));
const missing = rows.filter((r) => !r.have);

if (process.argv.includes('--md')) {
  console.log('| Photo | Where it appears | Crop | Framing | Save as |\n| --- | --- | --- | --- | --- |');
  for (const r of missing) {
    console.log(`| ${r.what} | ${(r.pages ?? []).join('; ')} | ${r.ratio ?? ''} | ${r.framing ?? ''} | \`src/assets/${r.file}.jpg\` |`);
  }
} else {
  console.log(`${rows.length - missing.length} of ${rows.length} photos in place.\n`);
  for (const r of missing) {
    console.log(`MISSING  ${r.key}\n  What:  ${r.what}\n  Where: ${(r.pages ?? []).join('; ')}\n  Crop:  ${r.ratio}  ${r.framing ?? ''}\n  Save:  src/assets/${r.file}.jpg\n`);
  }
}
