import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), url: z.string() });

// One Markdown file per project in src/content/projects/.
const projects = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Pipe-separated spec line shown under the title, e.g. ["Raspberry Pi 5", "Hailo-8"].
    spec: z.array(z.string()),
    category: z.enum(['Research', 'Hardware & embedded', 'Machine learning', 'Explorations']),
    status: z.string(),
    period: z.string(),
    // Used for sorting: newest first.
    sortDate: z.coerce.date(),
    role: z.string(),
    // Set a number (1, 2, 3) to feature the project on the home page in that order.
    featured: z.number().optional(),
    // A key from src/data/photos.json used as the cover image.
    cover: z.string().optional(),
    // Phone screenshots (photo keys) shown side by side instead of a single cover.
    screens: z.array(z.string()).optional(),
    // A line-art illustration used when there is no cover (file name in src/assets/art without .svg).
    art: z.string().optional(),
    links: z.array(link).default([]),
    // Extra images shown on the project page: keys from src/data/photos.json.
    gallery: z.array(z.object({ photo: z.string(), caption: z.string().optional() })).default([]),
    // Optional note shown on the page, e.g. how a project was built.
    note: z.string().optional(),
    award: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// One Markdown file per post in src/content/blog/. Set draft: true to keep a post off the site.
const blog = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Short life updates shown on Home and About ("Now").
const updates = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/updates' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
  }),
});

// Education, research, work, leadership and awards for the Experience page.
const experience = defineCollection({
  loader: file('./src/content/experience.yaml'),
  schema: z.object({
    section: z.enum(['Education', 'Research & design', 'Work', 'Leadership & community', 'Awards & honors']),
    title: z.string(),
    org: z.string(),
    period: z.string(),
    order: z.number(),
    place: z.string().optional(),
    bullets: z.array(z.string()).default([]),
    link: link.optional(),
    project: z.string().optional(),
    // A key from src/data/photos.json shown with the entry.
    photo: z.string().optional(),
  }),
});

export const collections = { projects, blog, updates, experience };
