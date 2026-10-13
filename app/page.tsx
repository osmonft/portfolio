import { Fragment } from "react";
import Link from "next/link";
import { MarketLine } from "@/components/MarketLine";
import { profile, routes } from "@/content/site";

// The landing page is three words, small and centred: Work, Résumé, Contact.
// Hovering one dims the others. Behind them, one faint rising line.
export default function Landing() {
  return (
    <main className="landing">
      <MarketLine />
      <div className="landing-corner top label">
        <span className="mask" data-intro="3"><span>{profile.name}</span></span>
      </div>

      <nav className="landing-routes" aria-label="Primary">
        <ul>
          {routes.map((r, i) => (
            <Fragment key={r.href}>
              {i > 0 && <li aria-hidden><span className="landing-sep" data-sep data-intro={1 + i * 0.6} /></li>}
              <li>
                <Link href={r.href} className="hover-parent" data-page>
                  <span className="mask" data-intro={0.8 + i * 0.6}>
                    <span className="label link">{r.label}</span>
                  </span>
                </Link>
              </li>
            </Fragment>
          ))}
        </ul>
      </nav>

      <div className="landing-corner bottom label muted">
        <span className="mask" data-intro="3.4"><span>{profile.practice}</span></span>
        <span className="mask" data-intro="3.4"><span>{profile.location}</span></span>
      </div>
    </main>
  );
}
