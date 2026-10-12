import { profile } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer label muted" data-rise>
      <span className="mask"><span>© 2026 {profile.name}</span></span>
      <span className="mask hide-sm"><span>{profile.location}</span></span>
      <span className="mask"><a className="link" href="#top">Back to top</a></span>
    </footer>
  );
}
