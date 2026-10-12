import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Reveal from '@/components/Reveal';
import { Download } from '@/components/Icons';
import { CERTS, CONTACT, EXPERIENCE, RESUME_PROJECTS, SKILLS, type Entry } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Resume | Osmon Djumagulov',
  description: 'Resume of Osmon Djumagulov: Finance BBA at Baruch College, founder of Edge Terminal.',
};

const PDF = '/Osmonbek_Djumagulov_Resume.pdf';

function Section({ n, title, items, showPlace }: { n: string; title: string; items: Entry[]; showPlace?: boolean }) {
  return (
    <section style={{ marginTop: 80 }}>
      <h2 className="rv mono rs-h">({n}) {title}</h2>
      {items.map((j) => (
        <div className="job rv" key={j.org}>
          <div className="mono jd">
            {j.dates}
            {showPlace && j.place ? <><br />{j.place}</> : null}
          </div>
          <div>
            <div className="jt">{j.org}</div>
            <div className="jr">{j.role}</div>
            <ul className="bul">
              {j.bullets.map((b) => (
                <li key={b.slice(0, 32)}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

export default function Resume() {
  return (
    <>
      <Reveal />
      <Nav home={false} />
      <main className="resume">
        <div className="fade mono label" style={{ ['--d' as string]: '.3s' }}>RESUME / 2026</div>
        <h1 style={{ margin: '28px 0 0', fontWeight: 400, fontSize: 'clamp(56px, 9vw, 132px)', lineHeight: 0.9, letterSpacing: '-0.04em' }}>
          <span className="mask">
            <span style={{ ['--d' as string]: '.1s' }}>
              The <span className="serif it acc">résumé.</span>
            </span>
          </span>
        </h1>

        <div className="fade" style={{ ['--d' as string]: '.5s', marginTop: 40, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
          <p style={{ margin: 0, fontSize: 20, lineHeight: 1.5, color: 'var(--ink2)', fontWeight: 300, maxWidth: 560 }}>
            Finance BBA at Baruch, building at the intersection of markets, data and AI. New York, NY.
          </p>
          <div className="row-btns">
            <a className="btn" href={PDF} download>Download PDF <Download /></a>
            <a className="ghost" href={`mailto:${CONTACT.email}`}>Email</a>
            <a className="ghost" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <section style={{ marginTop: 112 }}>
          <h2 className="rv mono rs-h">(01) EDUCATION</h2>
          <div className="job rv">
            <div className="mono jd">Dec 2026<br />New York, NY</div>
            <div>
              <div className="jt">Baruch College, Zicklin School of Business</div>
              <div className="jr">BBA in Finance, Minor in Communications</div>
              <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <span className="chip2 mono">GPA 3.7 / 4.00</span>
                <span className="chip2 mono">Zicklin Honors Program</span>
                <span className="chip2 mono">Dean&apos;s List, all terms</span>
              </div>
              <p style={{ margin: '18px 0 0', color: 'var(--mute)', fontSize: 15, lineHeight: 1.6 }}>
                Coursework: Corporate Finance, Financial Reporting Analysis, Advanced Investment Analysis, Statistical
                Analysis in Economics and Finance, Honors Case Studies in Business
              </p>
            </div>
          </div>
        </section>

        <Section n="02" title="EXPERIENCE" items={EXPERIENCE} showPlace />
        <Section n="03" title="PROJECTS" items={RESUME_PROJECTS} />

        <section className="two" style={{ marginTop: 80 }}>
          <div className="rv">
            <h2 className="mono rs-h" style={{ marginBottom: 24 }}>(04) CERTIFICATIONS</h2>
            {CERTS.map((c) => (
              <div className="li-row" key={c.name}>
                <div>
                  <div style={{ fontSize: 18 }}>{c.name}</div>
                  <div style={{ fontSize: 14, color: 'var(--mute)', marginTop: 4 }}>{c.by}</div>
                </div>
                <div className="mono" style={{ fontSize: 12, color: 'var(--mute)', whiteSpace: 'nowrap', paddingTop: 4 }}>{c.date}</div>
              </div>
            ))}
          </div>
          <div className="rv">
            <h2 className="mono rs-h" style={{ marginBottom: 24 }}>(05) SKILLS</h2>
            {SKILLS.map((g) => (
              <div key={g.label} style={{ padding: '18px 0', borderTop: '1px solid var(--line)' }}>
                <div className="mono" style={{ fontSize: 12, color: 'var(--mute)', marginBottom: 12, letterSpacing: '.06em' }}>{g.label}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {g.items.map((s) => (
                    <span className="chip2" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="rv" style={{ marginTop: 96, paddingTop: 40, borderTop: '1px solid var(--line)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
          <p style={{ margin: 0, fontSize: 15, color: 'var(--mute)' }}>
            Languages: Kyrgyz (native), Russian (fluent). Interests: chess, European football, crypto markets, film, video editing.
          </p>
          <a className="btn" href={PDF} download>Download PDF</a>
        </div>
      </main>
    </>
  );
}
