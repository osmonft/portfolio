import type { Metadata } from 'next';
import { SITE } from './data';

type Options = { title?: string; description?: string; path: string; image?: { url: string; width: number; height: number; alt: string } };

// Next replaces (not merges) openGraph per page, so every page builds the full set here.
export function pageMeta({ title, description = SITE.description, path, image }: Options): Metadata {
  const full = title ? `${title} | ${SITE.name}` : SITE.name;
  return {
    title: title ? { absolute: full } : { absolute: SITE.name },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: full,
      description,
      url: path,
      siteName: SITE.name,
      locale: 'en_US',
      type: 'website',
      ...(image && { images: [image] }),
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title: full,
      description,
      ...(image && { images: [image.url] }),
    },
  };
}
