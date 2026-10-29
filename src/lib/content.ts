import { getCollection } from 'astro:content';

export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.sortDate.valueOf() - a.data.sortDate.valueOf());
}

export async function getFeaturedProjects() {
  const all = await getProjects();
  return all.filter((p) => p.data.featured !== undefined).sort((a, b) => a.data.featured! - b.data.featured!);
}

export async function getPosts() {
  const all = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getUpdates() {
  const all = await getCollection('updates');
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date, opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }) =>
  d.toLocaleDateString('en-US', { timeZone: 'UTC', ...opts });
