import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { inDevelopment, projects } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("Work", "Projects by Osmon Djumagulov: Edge Terminal, THEO, ChainSight and Coach Caton.", "/work");

// The work: one plate per project in a staggered pair of columns, each with
// its name and kind in small capitals. Everything else is on the project page.
export default function Work() {
  return (
    <div className="page">
      <Header />
      <main>
        <div className="page-title mask" data-intro="1"><h1 className="title">Work</h1></div>

        <div className="work-index grid">
          {projects.map((p, i) => {
            const cover = p.cover ?? p.plates[0];
            const mounted = p.cover ? { className: "frame contain", style: { background: p.cover.background } } : { className: "frame" };
            const enter = i < 2 ? { "data-intro": 2 + i * 0.5 } : { "data-rise": "" };
            return (
              <Link key={p.slug} href={`/work/${p.slug}`} className="work-card hover-parent" data-page>
                <div className="plate" data-plate {...enter}>
                  <div {...mounted}>
                    <Image src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} sizes="(min-width: 900px) 46vw, 92vw" priority={i < 2} />
                  </div>
                </div>
                <div className="card-label label" {...enter}>
                  <span className="mask"><span className="link">{p.title}</span></span>
                  <span className="mask"><span className="kind">{p.kind}</span></span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="also label" data-rise>
          <span className="mask"><span>{inDevelopment.title}</span></span>
          <span className="mask"><span className="muted">{inDevelopment.kind}</span></span>
        </div>
      </main>
      <Footer />
    </div>
  );
}
