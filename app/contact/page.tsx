import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { profile } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta("Contact", "Contact Osmon Djumagulov by email, LinkedIn or GitHub. Based in New York.", "/contact");

// A few hairline rows: the label on the left, the one thing you need on the right.
export default function Contact() {
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: "Email", value: <a className="link" href={`mailto:${profile.email}`}>{profile.email}</a> },
    { label: "LinkedIn", value: <a className="link" href={profile.linkedin} target="_blank" rel="noopener">in/osmon-d</a> },
    { label: "GitHub", value: <a className="link" href={profile.github} target="_blank" rel="noopener">osmonft</a> },
    { label: "Résumé", value: <a className="link" href={profile.resumePdf} target="_blank" rel="noopener">Download PDF</a> },
    { label: "Based", value: profile.location },
  ];
  return (
    <div className="page">
      <Header />
      <main>
        <div className="page-title mask" data-intro="1"><h1 className="title">Contact</h1></div>
        <div className="rows">
          {rows.map((r, i) => (
            <div key={r.label} data-intro={1.6 + i * 0.4}>
              <span className="mask"><span className="label muted">{r.label}</span></span>
              <span className="mask"><span className="title">{r.value}</span></span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
