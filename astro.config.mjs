// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site is served from https://rohanpatrick568.github.io (a GitHub "user site").
// If you add a custom domain later, change `site` here and add public/CNAME.
export default defineConfig({
  site: 'https://rohanpatrick568.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: { inlineStylesheets: 'auto' },
  image: { responsiveStyles: false },
});
