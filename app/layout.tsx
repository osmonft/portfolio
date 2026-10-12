import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';
import { SITE } from '@/lib/data';
import { pageMeta } from '@/lib/meta';
import './globals.css';

const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  authors: [{ name: SITE.name }],
  ...pageMeta({ path: '/' }),
};

export const viewport: Viewport = { themeColor: '#f7f6f2' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body id="top">{children}</body>
    </html>
  );
}
