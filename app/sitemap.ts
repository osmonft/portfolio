import type { MetadataRoute } from "next";
import { projects } from "@/content/site";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work", "/resume", "/contact", ...projects.map((p) => `/work/${p.slug}`)].map((p) => ({ url: `${SITE_URL}${p}` }));
}
