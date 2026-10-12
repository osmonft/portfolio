import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import { CONTACT, SITE } from '@/lib/data';
import { pageMeta } from '@/lib/meta';

export const metadata: Metadata = pageMeta({
  title: 'Contact',
  description: 'Contact Osmon Djumagulov by email, LinkedIn or GitHub. Based in New York.',
  path: '/contact',
});

const ROWS: { label: string; value: string; href?: string; external?: boolean }[] = [
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: 'LinkedIn', value: 'in/osmon-d', href: CONTACT.linkedin, external: true },
  { label: 'GitHub', value: 'osmonft', href: CONTACT.github, external: true },
  { label: 'Résumé', value: 'Download PDF', href: CONTACT.resume, external: true },
  { label: 'Based', value: SITE.location },
];

export default function Contact() {
  return (
    <div className="page">
      <SiteHeader current="/contact" />
      <main className="fade">
        <div className="page-title">
          <h1 className="title">Contact</h1>
        </div>
        <div className="rows">
          {ROWS.map((r) => (
            <div key={r.label}>
              <span className="label muted">{r.label}</span>
              <span className="title">
                {r.href ? (
                  <a className="link" href={r.href} {...(r.external && { target: '_blank', rel: 'noopener' })}>{r.value}</a>
                ) : (
                  r.value
                )}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
