# rohanpatrick568.github.io

Personal website and portfolio of Rohan Patrick Jr., an Electrical & Computer Engineering student at the University at Albany.

Live (once published): https://rohanpatrick568.github.io

## Stack

- **[Astro](https://astro.build) 7**: plain static HTML output with almost no JavaScript (only the mobile menu and the project filter). There's no server, database or paid service.
- **Content in Markdown and YAML** under `src/content/`. Pages read from it, so editing the content never touches layouts.
- **One photo registry** (`src/data/photos.json`). Every image on the site is listed there by key. A missing file shows a placeholder that explains what to shoot.
- **GitHub Pages** hosting through GitHub Actions (`.github/workflows/deploy.yml`). It's free for public repositories.

## Commands

Requires Node 22.22 or newer.

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies (once) |
| `npm run dev` | Live-reloading local site at http://localhost:4321 |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run check` | Type-check and validate all content files |
| `npm run photos` | List photos that are still missing (`-- --md` for a table) |
| `npm run qa` | Playwright test pass against a running preview (see below) |

To run the full test pass:

```sh
npm run build
npm run preview &     # leave this running
npm run qa            # add -- --external to also check outside links
```

It loads every page at phone, tablet and desktop widths and checks HTTP status, horizontal overflow, broken images, one `<h1>` per page, meta descriptions, console errors, accessibility (axe, WCAG 2.2 AA serious/critical), keyboard skip link and internal links. Screenshots go to `test-results/`.

## Where things live

```
src/
  config/site.ts          name, headline, emails, social links, nav, publishing switches
  content/
    projects/*.md         one file per project (front matter + write-up)
    blog/*.md             blog posts (_post-template.md to start)
    updates/*.md          short "Now" updates (_template.md to start)
    experience.yaml       experience page entries
  data/
    photos.json           every image, with placeholder guidance
    skills.ts             skills and coursework lists
    milestones.ts         About-page timeline
  assets/
    photos/               your photos go here (see docs/EDITING.md)
    projects/             project screenshots and figures
    art/                  line-art SVG illustrations
  pages/                  routes (layouts and copy for each page)
  components/, layouts/, styles/global.css
public/                   copied as-is (favicon, social card, robots.txt, resume PDF)
docs/
  EDITING.md              how to update content and photos
  CONTENT-TODO.md         what's still needed before and after launch
```

See **[docs/EDITING.md](docs/EDITING.md)** for step-by-step editing instructions.
