import { SITE } from '@/lib/data';

export default function SiteFooter() {
  return (
    <footer className="site-footer label muted">
      <span>© {new Date().getFullYear()} {SITE.name}</span>
      <span className="hide-sm">{SITE.location}</span>
      <a className="link" href="#top">Back to top</a>
    </footer>
  );
}
