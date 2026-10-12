import Link from 'next/link';
import { Fragment } from 'react';
import type { Metadata } from 'next';
import { NAV } from '@/components/SiteHeader';
import { SITE } from '@/lib/data';
import { pageMeta } from '@/lib/meta';

export const metadata: Metadata = pageMeta({ path: '/' });

export default function Home() {
  return (
    <main className="landing fade">
      <div className="landing-corner top label">
        <h1>{SITE.name}</h1>
      </div>
      <nav className="landing-routes" aria-label="Primary">
        <ul>
          {NAV.map((n, i) => (
            <Fragment key={n.href}>
              {i > 0 && <li aria-hidden="true"><span className="landing-sep" /></li>}
              <li>
                <Link className="hover-parent" href={n.href}>
                  <span className="label link">{n.label}</span>
                </Link>
              </li>
            </Fragment>
          ))}
        </ul>
      </nav>
      <div className="landing-corner bottom label muted">
        <span>{SITE.tagline}</span>
        <span>{SITE.location}</span>
      </div>
    </main>
  );
}
