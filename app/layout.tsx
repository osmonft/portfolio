import type { Metadata } from 'next';
import { Geist, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', weight: ['300', '400', '500', '600'] });
const serif = Instrument_Serif({ subsets: ['latin'], variable: '--font-serif', weight: '400', style: ['normal', 'italic'] });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'Osmon Djumagulov | Portfolio',
  description: 'Building at the intersection of finance, data, and AI. Projects and work by Osmon Djumagulov.',
  authors: [{ name: 'Osmon Djumagulov' }],
  keywords: ['Osmon Djumagulov', 'portfolio', 'finance', 'data', 'AI', 'quantitative', 'prediction markets'],
  openGraph: {
    title: 'Osmon Djumagulov | Portfolio',
    description: 'Building at the intersection of finance, data, and AI.',
    siteName: 'Osmon Djumagulov',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osmon Djumagulov | Portfolio',
    description: 'Building at the intersection of finance, data, and AI.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
