'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-bg/80 backdrop-blur-md border-b border-border/60">
      {/* Logo / name */}
      <Link
        href="/"
        className="font-display font-bold text-sm tracking-[0.15em] uppercase text-text hover:text-accent transition-colors duration-200"
      >
        Osmon Djumagulov
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-8">
        <Link
          href="/projects"
          className={`font-display text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
            pathname === '/projects' ? 'text-accent' : 'text-muted hover:text-text'
          }`}
        >
          Projects
        </Link>
      </div>
    </nav>
  )
}
