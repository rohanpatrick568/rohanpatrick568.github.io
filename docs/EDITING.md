# Editing your site

Everything you'll normally change is a text file in `src/`. You never need to touch the page layouts.

There are two ways to edit:

- **On GitHub.** Open the file in the repository, click the pencil icon, edit and commit to `main`. The site rebuilds and redeploys in about a minute (watch the **Actions** tab).
- **On your laptop.** Run `npm install` once, then `npm run dev` and open http://localhost:4321. Pages update as you save. When you're happy, commit and push to `main`.

Before pushing bigger changes, run `npm run check`. It catches typos in front matter, such as a misspelled category or a date in the wrong format.

---

## Replace a placeholder with a real photo

Every image on the site is listed by key in `src/data/photos.json`. Each entry says what the photo should show, why, the crop ratio and how to frame it. The same guidance appears on the dashed placeholder on the page itself.

1. Run `npm run photos` to see which photos are missing and the exact file name for each.
2. Save your photo with that name, for example `src/assets/photos/portrait.jpg`. The extension can be `.jpg`, `.jpeg`, `.png`, `.webp` or `.avif`.
3. Rebuild (or just look at `npm run dev`). The placeholder is replaced automatically.

Tips:

- Use the original, full-size file. The site makes the small, fast versions itself.
- The ratio is a crop, not a requirement. A photo with a different shape is cropped to fit, centered. For screenshots or charts that shouldn't be cropped, add `"fit": "contain"` to that entry in `photos.json`.
- Update the `alt` text in `photos.json` so it describes what is actually in your photo.
- Only publish photos of other people if they're happy to be online, and get permission for photos someone else took (for example, the UAlbany News photographer).

### Hide the placeholder instructions

In `src/config/site.ts`, set `showPlaceholderNotes: false`. Missing photos then show a quiet tinted panel with a faint line drawing instead of the instructions. Do this before you make the site public if any photos are still missing.

### Add a new image

Add an entry to `photos.json`:

```json
"my-new-photo": {
  "file": "photos/my-new-photo",
  "alt": "What the photo shows, for screen readers",
  "what": "Short description for the placeholder",
  "why": "What it should communicate",
  "ratio": "4:3",
  "framing": "How to frame it",
  "pages": ["Projects: My project"]
}
```

Then use the key `my-new-photo` as a project's `cover` or in its `gallery`.

---

## Add a project

1. Copy an existing file in `src/content/projects/` (for example `nn-in-c.md`) and rename it. The file name becomes the URL, so `my-robot.md` becomes `/projects/my-robot/`.
2. Edit the front matter at the top:

   | Field | What it's for |
   | --- | --- |
   | `title`, `summary` | Name and one- or two-sentence description |
   | `spec` | Short tech list shown as `A | B | C` |
   | `category` | One of `Research`, `Hardware & embedded`, `Machine learning`, `Explorations` |
   | `status` | e.g. `Completed`, `In progress`, `Prototype` |
   | `period` | Shown as text, e.g. `Spring 2027` |
   | `sortDate` | `YYYY-MM-DD`. The newest projects are listed first |
   | `role` | Your role, especially on team projects |
   | `featured` | Optional. `1`, `2` or `3` puts it on the home page in that order |
   | `cover` / `screens` / `art` | Optional. A photo key, a list of phone screenshot keys, or a line-art file name in `src/assets/art/` |
   | `links` | Optional. A list of `{ label, url }` items (repo, demo, article) |
   | `gallery` | Optional. A list of `{ photo, caption }` items |
   | `note`, `award` | Optional. A short note box, or an award line |
   | `draft` | `true` hides it from the site |

3. Write the project below the front matter in Markdown. A structure that works is: the problem, your part, how it works, what was hard, and status or results. Only include numbers you can back up.

To change which projects are on the home page, change the `featured` numbers. Remove the field to take a project off the home page.

---

## Publish a blog post

1. Copy `src/content/blog/_post-template.md` and rename it without the underscore, such as `building-the-haptic-vest.md`. That becomes `/blog/building-the-haptic-vest/`.
2. Fill in `title`, `description`, `pubDate` and `tags`, and write the post.
3. While `draft: true`, the post shows only in `npm run dev`. Change it to `draft: false` to publish.

The RSS feed (`/blog/rss.xml`) and sitemap update automatically.

Post ideas that would come straight from work you've already done (draft them in your own words):

- What I learned running two neural networks at once on a Raspberry Pi 5 and Hailo-8
- Why my trading model looked great on validation data and failed on new data
- Converting a sound meter from third-octave to full-octave bands
- Writing a neural network in plain C

---

## Update "Now" and your goals

The **Now** section on the Home and About pages comes from `src/content/updates/`. Copy `_template.md`, rename it (for example `2027-01-new-job.md`), set the `date` and `title`, and write one or two sentences. The newest update shows on the Home page, and all of them show on About. Delete or edit old ones whenever you like.

When something big happens (a new job, graduation), also:

- Add it to the timeline in `src/data/milestones.ts`.
- Add or edit an entry in `src/content/experience.yaml`.
- Update the headline or intro in `src/config/site.ts` and `src/pages/index.astro` if your title changes.

## Edit your experience

`src/content/experience.yaml` holds every entry on the Experience page. Each entry has an `id`, a `section` (Education, Research & design, Work, Leadership & community or Awards & honors), an `order` within that section, `title`, `org`, `period`, optional `place`, `bullets` and `link`, optional `project` (a project file name, which adds a "See the project" link), and optional `photo` (a key from `src/data/photos.json`, shown under the entry).

Skills and coursework are in `src/data/skills.ts`.

## Update your resume

Your resume is `public/resume.pdf`. Download links for it appear in the home page buttons, on the Experience and Contact pages and in the footer. To update it:

1. Edit the resume in Overleaf, then download the PDF (**Recompile**, then the download icon).
2. Remember the file is public: anyone who visits can download it, including the phone number in the header.
3. Replace `public/resume.pdf` with the new file, keeping the name `resume.pdf`, and commit.

Visitors' browsers save it as `Rohan-Patrick-Jr-Resume.pdf`. Change `resumeFileName` in `src/config/site.ts` to rename it, or set `resumePdf: null` to hide every download link.

## Change your name, emails, links or colours

- Name, headline, description, emails, social links and navigation are all in `src/config/site.ts`.
- Colours and spacing are the variables at the top of `src/styles/global.css`.
- The social sharing image is `public/og-default.png` (1200×630). Replace it with your own if you like.

## The longer write-ups

Page copy that isn't a project or post (the About story, values and the home page intro) lives directly in `src/pages/about.astro` and `src/pages/index.astro`. It's plain text between HTML tags, so you can edit the sentences without touching anything else.
