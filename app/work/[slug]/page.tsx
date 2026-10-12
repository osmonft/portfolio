import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Plates } from "@/components/Plates";
import { projects } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  const cover = p.plates[0];
  return pageMeta(p.title, p.summary, `/work/${p.slug}`, { url: cover.src, width: cover.width, height: cover.height, alt: cover.alt });
}

// A project: its particulars held in a quiet column on the left while the
// pictures run down the right — a wall label beside the work.
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const facts = p.year ? [{ label: "Year", value: p.year }, ...p.facts] : p.facts;

  return (
    <div className="page">
      <Header />
      <main>
        <article className="project grid">
          <aside className="project-label">
            <div>
              <p className="mask" data-intro="1">
                <Link href="/work" className="label muted link" data-page>Work</Link>
              </p>
              <div className="mask" data-intro="1.4"><h1 className="title">{p.title}</h1></div>
              <div className="mask" data-intro="1.8"><p className="label muted kind">{p.kind}</p></div>
              <p className="body summary" data-intro="2.4" data-split>{p.summary}</p>

              <dl className="facts" data-intro="3.2">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="label muted">{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="visit mask" data-intro="4">
                <a href={p.href} target="_blank" rel="noopener" className="label link">{p.linkLabel} ↗</a>
              </p>
            </div>
          </aside>

          <div className="project-plates">
            <Plates plates={p.plates} />
          </div>
        </article>

        <Link href={`/work/${next.slug}`} className="next label hover-parent" data-page data-rise>
          <span className="mask"><span className="muted">Next</span></span>
          <span className="mask"><span className="link">{next.title}</span></span>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
