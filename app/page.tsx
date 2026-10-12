import Link from 'next/link';
import Nav from '@/components/Nav';
import Reveal from '@/components/Reveal';
import Spotlight from '@/components/Spotlight';
import MarketBackground from '@/components/MarketBackground';
import { ArrowRight, ArrowUpRight } from '@/components/Icons';
import { CONTACT, PROJECTS, TICKER } from '@/lib/data';

const CREDS = [
  { k: 'EDUCATION', v: 'Baruch College', s: 'Finance BBA, Zicklin Honors Program' },
  { k: 'GRADUATING', v: 'Dec 2026', s: 'Open to full-time analyst roles' },
  { k: 'LICENSE', v: 'SIE', s: 'Securities Industry Essentials, FINRA' },
  { k: 'FOUNDER', v: 'OD Provisions', s: 'AI automation and tech studio' },
];

const PILLARS = [
  { k: 'FINANCE', v: 'Quantitative research and market analysis, built on a Finance BBA.' },
  { k: 'DATA', v: 'Pipelines and analytics that surface signals where decisions get made.' },
  { k: 'AI', v: 'Automation that replaces manual workflows with tools people use daily.' },
];

const METRICS = [
  { k: 'LIVE PRODUCTS', v: String(PROJECTS.filter((p) => p.status === 'LIVE').length) },
  { k: 'GRADUATING', v: 'Dec 2026' },
  { k: 'BASED IN', v: 'NYC' },
];

export default function Home() {
  const ticker = [...TICKER, ...TICKER, ...TICKER, ...TICKER];

  return (
    <>
      {/* Boot intro */}
      <div className="boot" aria-hidden="true">
        <div className="boot-box mono">
          <div className="ln l1"><span className="acc">&gt;</span> connecting to market feed...</div>
          <div className="ln l2"><span className="acc">&gt;</span> loading OD terminal...</div>
          <div className="ln l3"><span className="acc">&gt;</span> ready<span className="blink acc">_</span></div>
          <div className="boot-track"><div className="bar" /></div>
        </div>
      </div>

      <Spotlight />
      <MarketBackground />
      <Reveal />

      <div className="content">
        <Nav />

        {/* HERO */}
        <section id="top" className="wrap hero">
          <div className="fade mono kicker" style={{ ['--d' as string]: '2.1s' }}>
            <span className="pulse" />
            PORTFOLIO / 2026 <span className="acc">&gt;</span> FINANCE · DATA · AI<span className="blink acc">_</span>
          </div>
          <h1 className="h-name">
            <span className="mask"><span>Osmon</span></span>
            <span className="mask">
              <span className="serif it acc" style={{ letterSpacing: '-0.02em', ['--d' as string]: '1.65s' }}>Djumagulov</span>
            </span>
          </h1>
          <div className="hero-foot">
            <p className="fade hero-sub" style={{ ['--d' as string]: '2.3s' }}>
              Building at the intersection of finance, data, and AI. From quantitative research to production systems.
            </p>
            <div className="fade row-btns" style={{ ['--d' as string]: '2.5s' }}>
              <a className="btn" href="#work">View my work <ArrowRight /></a>
              <a className="ghost" href="#contact">Get in touch</a>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div className="ticker" aria-hidden="true">
          <div className="track mono">
            {ticker.map(([label, mark], i) => (
              <span className="t" key={i}>
                {label} <span className="acc">{mark}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="wrap sec-about">
          <div className="rv mono label" style={{ marginBottom: 40 }}>(01) / APPROACH</div>
          <p className="rv statement">
            I turn <span className="serif it acc">market questions</span> into working tools. Research first, then code
            that ships, then the product people actually <span className="serif it">use.</span>
          </p>

          <div className="creds">
            {CREDS.map((c) => (
              <div className="cred rv" key={c.k}>
                <span className="mono cred-k">{c.k}</span>
                <span className="cred-v">{c.v}</span>
                <span className="cred-s">{c.s}</span>
              </div>
            ))}
          </div>

          <div className="grow" style={{ height: 1, background: 'var(--acc)', marginTop: 80 }} />

          <div className="pillars">
            {PILLARS.map((p) => (
              <div className="rv" key={p.k}>
                <div className="mono pillar-k">{p.k}</div>
                <div className="pillar-v">{p.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="wrap sec-work">
          <div className="work-head">
            <div>
              <div className="rv mono label" style={{ marginBottom: 24 }}>(02) / SELECTED WORK</div>
              <h2 className="rv h-big">Things I&apos;ve <span className="serif it acc">built</span></h2>
            </div>
            <p className="rv muted" style={{ margin: 0, maxWidth: 340, fontSize: 17, lineHeight: 1.5 }}>
              From concept to deployment. Hover a row, click through to the live build.
            </p>
          </div>

          <div className="rows">
            {PROJECTS.map((p) => {
              const inner = (
                <>
                  <span className="mono muted" style={{ fontSize: 15 }}>{p.num}</span>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                      <span className="ttl">{p.name}</span>
                      <span className={`mono status ${p.status === 'LIVE' ? 'live' : 'soon'}`}>{p.status}</span>
                    </span>
                    <span className="muted" style={{ fontSize: 16, lineHeight: 1.5, maxWidth: 560 }}>{p.desc}</span>
                  </span>
                  <span className="tags">
                    {p.tags.map((t) => (
                      <span className="chip mono" key={t}>{t}</span>
                    ))}
                  </span>
                  <span className="arr"><ArrowRight size={20} /></span>
                </>
              );
              return p.href ? (
                <a key={p.num} className="row rv" href={p.href} target="_blank" rel="noopener noreferrer">{inner}</a>
              ) : (
                <div key={p.num} className="row rv">{inner}</div>
              );
            })}
          </div>
        </section>

        {/* DRIFT TYPE */}
        <div className="drift-wrap">
          <div className="drift serif" aria-hidden="true">finance × ai</div>
          <div className="wrap metrics">
            {METRICS.map((m) => (
              <div className="metric rv" key={m.k}>
                <span className="metric-v">{m.v}</span>
                <span className="mono metric-k">{m.k}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <section id="contact" className="wrap sec-contact">
          <div className="rv mono label" style={{ marginBottom: 32 }}>(03) / CONTACT</div>
          <h2 className="rv h-contact">
            Let&apos;s build<br />
            <span className="serif it acc">something.</span>
          </h2>
          <div className="rv row-btns" style={{ marginTop: 64 }}>
            <a className="btn" href={`mailto:${CONTACT.email}`}>{CONTACT.email} <ArrowUpRight /></a>
            <a className="ghost" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="ghost" href={CONTACT.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <Link className="ghost" href="/resume">Resume</Link>
          </div>
        </section>

        <footer className="wrap footer mono">
          <span>© 2026 Osmon Djumagulov</span>
          <span>New York, NY</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </div>
    </>
  );
}
