import Link from 'next/link';
import type { Metadata } from 'next';
import Plate from '@/components/Plate';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { IN_DEVELOPMENT, PROJECTS } from '@/lib/data';
import { pageMeta } from '@/lib/meta';

export const metadata: Metadata = pageMeta({
  title: 'Work',
  description: 'Projects by Osmon Djumagulov: Edge Terminal, THEO, ChainSight and Coach Caton.',
  path: '/work',
});

export default function Work() {
  return (
    <div className="page">
      <SiteHeader current="/work" />
      <main className="fade">
        <div className="page-title">
          <h1 className="title">Work</h1>
        </div>
        <div className="work-index grid">
          {PROJECTS.map((p, i) => (
            <Link key={p.slug} className="work-card hover-parent" href={`/work/${p.slug}`}>
              <Plate shot={p.shots[0]} sizes="(min-width: 900px) 46vw, 92vw" priority={i < 2} />
              <div className="card-label label">
                <span className="link">{p.name}</span>
                <span className="kind">{p.kind}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="also label">
          <span>{IN_DEVELOPMENT.name}</span>
          <span className="muted">{IN_DEVELOPMENT.kind} · In development</span>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
