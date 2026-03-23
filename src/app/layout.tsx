import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: {
    default: 'Osmon Djumagulov — Portfolio',
    template: '%s — Osmon Djumagulov',
  },
  description:
    'Building at the intersection of finance, data, and AI. Projects and work by Osmon Djumagulov.',
  authors: [{ name: 'Osmon Djumagulov' }],
  keywords: ['Osmon Djumagulov', 'portfolio', 'finance', 'data', 'AI', 'quantitative'],
  openGraph: {
    type: 'website',
    siteName: 'Osmon Djumagulov',
    title: 'Osmon Djumagulov — Portfolio',
    description: 'Building at the intersection of finance, data, and AI.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osmon Djumagulov — Portfolio',
    description: 'Building at the intersection of finance, data, and AI.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-bg text-text font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
