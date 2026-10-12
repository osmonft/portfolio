import type { Metadata } from 'next';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { CERTS, CONTACT, EDUCATION, EXPERIENCE, RESUME_PROJECTS, SKILLS, type Entry } from '@/lib/data';
import { pageMeta } from '@/lib/meta';

export const metadata: Metadata = pageMeta({
  title: 'Résumé',
  description: 'Résumé of Osmon Djumagulov: Finance BBA at Baruch College, founder of Edge Terminal, New York.',
  path: '/resume',
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cv-section grid">
      <h2 className="sec label">{title}</h2>
      <div className="entries">{children}</div>
    </section>
  );
}

function Entries({ items }: { items: Entry[] }) {
  return items.map((e) => (
    <article className="cv-entry" key={e.org}>
      <p className="when label muted">{e.dates}</p>
      <div className="what">
        <h3 className="name">{e.org}</h3>
        <p className="role">{e.role}</p>
        <ul className="body">
          {e.bullets.map((b) => <li key={b.slice(0, 32)}>{b}</li>)}
        </ul>
      </div>
    </article>
  ));
}

export default function Resume() {
  return (
    <div className="page">
      <SiteHeader current="/resume" />
      <main className="fade">
        <div className="cv-head">
          <h1 className="title">Résumé</h1>
          <p className="actions">
            <a className="button label" href={CONTACT.resume} download>Download PDF</a>
          </p>
        </div>

        <Section title="Education">
          <article className="cv-entry">
            <p className="when label muted">{EDUCATION.dates}</p>
            <div className="what">
              <h3 className="name">{EDUCATION.school}</h3>
              <p className="role">{EDUCATION.degree}</p>
              <p className="body note">{EDUCATION.honors.join(' · ')}</p>
              <p className="body note">Coursework: {EDUCATION.coursework}</p>
            </div>
          </article>
        </Section>

        <Section title="Experience"><Entries items={EXPERIENCE} /></Section>
        <Section title="Projects"><Entries items={RESUME_PROJECTS} /></Section>

        <Section title="Certifications">
          {CERTS.map((c) => (
            <article className="cv-entry" key={c.name}>
              <p className="when label muted">{c.date}</p>
              <div className="what">
                <h3 className="name">{c.name}</h3>
                <p className="role">{c.by}</p>
              </div>
            </article>
          ))}
        </Section>

        <Section title="Skills">
          {SKILLS.map((s) => (
            <article className="cv-entry" key={s.label}>
              <p className="when label muted">{s.label}</p>
              <div className="what">
                <p className="name">{s.items.join(', ')}</p>
              </div>
            </article>
          ))}
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
