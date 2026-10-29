import type { ImageMetadata } from 'astro';
import registry from '../data/photos.json';

export interface PhotoEntry {
  file: string;
  alt: string;
  what?: string;
  why?: string;
  ratio?: string;
  framing?: string;
  pages?: string[];
  fit?: 'cover' | 'contain';
}

export type PhotoKey = keyof typeof registry.photos;

// Every image under src/assets, keyed by its path without the extension.
const files = import.meta.glob<ImageMetadata>('../assets/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
});
const byPath = new Map<string, ImageMetadata>();
for (const [path, meta] of Object.entries(files)) {
  byPath.set(path.replace('../assets/', '').replace(/\.[^.]+$/, ''), meta);
}

export function getPhoto(key: PhotoKey) {
  const entry = registry.photos[key] as PhotoEntry | undefined;
  if (!entry) throw new Error(`Unknown photo key "${key}". Add it to src/data/photos.json.`);
  return { entry, image: byPath.get(entry.file) ?? null };
}

export function isPhotoKey(key: string): key is PhotoKey {
  return key in registry.photos;
}

/** "4:5" -> "4 / 5" for CSS aspect-ratio. */
export function cssRatio(ratio = '4:3') {
  const [w, h] = ratio.split(':');
  return `${w} / ${h}`;
}
