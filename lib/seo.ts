import type { Metadata } from "next";
import { profile } from "@/content/site";

// The live domain. Canonical links, Open Graph URLs and the sitemap all resolve against it.
export const SITE_URL = "https://www.osmondjumagulov.com";

// Next replaces a parent's openGraph instead of merging it, so each page sets the whole block.
export function pageMeta(title: string, description: string, path: string, image?: { url: string; width: number; height: number; alt: string }): Metadata {
  const full = `${title} | ${profile.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: full, description, url: path, siteName: profile.name, type: "website", ...(image && { images: [image] }) },
    twitter: { card: image ? "summary_large_image" : "summary", title: full, description },
  };
}
