import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Plate from '@/components/Plate';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { PROJECTS } from '@/lib/data';
import { pageMeta } from '@/lib/meta';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return {};
  const shot = p.shots[0];
  return pageMeta({
    title: p.name,
    description: `${p.name}, ${p.kind.toLowerCase()}. ${p.summary.split('. ')[0]}.`,
    path: `/work/${p.slug}`,
    image: { url: shot.src, width: shot.width, height: shot.height, alt: shot.alt },
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const i = PROJECTS.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = PROJECTS[i];
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  return (
    <div className="page">
      <SiteHeader current="/work" />
      <main className="fade">
        <article className="project grid">
          <aside className="project-label">
            <div>
              <p><Link className="label muted link" href="/work">Work</Link></p>
              <h1 className="title">{p.name}</h1>
              <p className="label muted kind">{p.kind}</p>

              <section className="section">
                <h2 className="label muted">What it is</h2>
                <p className="body">{p.summary}</p>
              </section>
              <section className="section">
                <h2 className="label muted">What I did</h2>
                <p className="body">{p.did}</p>
              </section>

              <dl className="facts">
                {p.facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className="label muted">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
                <div>
                  <dt className="label muted">Built on</dt>
                  <dd><ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul></dd>
                </div>
              </dl>

              <p className="visit">
                <a className="label link" href={p.href} target="_blank" rel="noopener">{p.linkLabel} ↗</a>
              </p>
            </div>
          </aside>
          <div className="project-plates">
            <div className="plates">
              {p.shots.map((s, n) => (
                <Plate
                  key={s.src}
                  shot={s}
                  sizes={s.size === 'full' ? '(min-width: 1000px) 62vw, 92vw' : '(min-width: 1000px) 31vw, 92vw'}
                  priority={n === 0}
                />
              ))}
            </div>
          </div>
        </article>
        <Link className="next label hover-parent" href={`/work/${next.slug}`}>
          <span className="muted">Next</span>
          <span className="link">{next.name}</span>
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
