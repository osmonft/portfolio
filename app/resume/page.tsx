import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { profile, resume } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("Résumé", "Résumé of Osmon Djumagulov: Finance BBA at Baruch College, founder of Edge Terminal, New York.", "/resume");

export default function Resume() {
  return (
    <div className="page">
      <Header />
      <main>
        <div className="cv-head">
          <div className="mask" data-intro="1"><h1 className="title">Résumé</h1></div>
          <p className="actions mask" data-intro="1.6">
            <a className="label link" href={profile.resumePdf} target="_blank" rel="noopener">Download PDF</a>
          </p>
        </div>

        {resume.map((s, si) => {
          // The first section is above the fold: it plays with the arrival sequence.
          const enter = si === 0 ? { "data-intro": 2 } : { "data-rise": "" };
          return (
            <section key={s.section} className="cv-section grid" {...enter}>
              <p className="sec label">{s.section}</p>
              <div className="entries">
                {s.entries.map((e) => (
                  <article key={e.title} className="cv-entry">
                    <p className="when label muted">{e.when}</p>
                    <div className="what">
                      <h2 className="name">{e.title}</h2>
                      {e.role && <p className="role">{e.role}</p>}
                      {e.notes?.map((n) => <p key={n} className="body note">{n}</p>)}
                      {e.bullets && (
                        <ul className="body">
                          {e.bullets.map((b) => <li key={b}>{b}</li>)}
                        </ul>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}
