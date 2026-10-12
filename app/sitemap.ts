import type { MetadataRoute } from 'next';
import { PROJECTS, SITE } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/work', '/resume', '/contact', ...PROJECTS.map((p) => `/work/${p.slug}`)];
  return paths.map((p) => ({ url: `${SITE.url}${p}` }));
}
