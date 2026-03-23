import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Osmon Djumagulov — Portfolio',
}

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #2a2a2a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Warm ambient glow */}
      <div
        className="absolute inset-x-0 top-0 h-[50vh] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(74,222,128,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">

        {/* Eyebrow */}
        <p className="font-display text-xs tracking-[0.28em] uppercase text-muted mb-10">
          Portfolio &nbsp;·&nbsp; 2026
        </p>

        {/* Name */}
        <h1 className="font-display font-extrabold leading-[0.88] tracking-tight mb-8">
          <span
            className="block text-[clamp(3rem,10vw,7rem)] text-accent"
            style={{ letterSpacing: '-0.02em' }}
          >
            Osmon
          </span>
          <span
            className="block text-[clamp(2.2rem,7.5vw,5.5rem)] text-text"
            style={{ letterSpacing: '-0.03em' }}
          >
            Djumagulov
          </span>
        </h1>

        {/* Accent rule */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="block w-12 h-px bg-accent" aria-hidden="true" />
          <span className="text-muted text-xs tracking-widest uppercase font-display">
            Finance · Data · AI
          </span>
          <span className="block w-12 h-px bg-accent" aria-hidden="true" />
        </div>

        {/* Tagline */}
        <p className="text-muted text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-12">
          Building at the intersection of{' '}
          <span className="text-text font-medium">finance</span>,{' '}
          <span className="text-text font-medium">data</span>, and{' '}
          <span className="text-text font-medium">AI</span> — from quantitative
          research to production systems.
        </p>

        {/* CTA */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 bg-accent text-bg font-display font-bold text-sm tracking-[0.12em] uppercase px-8 py-4 transition-all duration-200 hover:bg-accent-dim group"
        >
          View My Work
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="group-hover:translate-x-1 transition-transform duration-200"
            aria-hidden="true"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-muted" />
      </div>
    </section>
  )
}
