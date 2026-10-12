import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Motion } from "@/components/Motion";
import { profile } from "@/content/site";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

// One family for everything. The width axis gives the labels their wide, tracked capitals.
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: { default: profile.name, template: `%s | ${profile.name}` },
  description: `${profile.name}. ${profile.practice}. Baruch College, ${profile.location}.`,
  openGraph: { title: profile.name, description: `${profile.practice}. Baruch College, ${profile.location}.`, url: "/", siteName: profile.name, type: "website" },
  twitter: { card: "summary", title: profile.name, description: `${profile.practice}. Baruch College, ${profile.location}.` },
  // Set PREVIEW_NOINDEX=1 only on a preview deployment, so it never competes with the real domain in search.
  ...(process.env.PREVIEW_NOINDEX === "1" ? { robots: { index: false, follow: false } } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable} suppressHydrationWarning>
      <head>
        {/* Hide entrance targets only when JS runs; without it the page is fully visible. */}
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }} />
      </head>
      <body id="top">
        <Motion />
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
