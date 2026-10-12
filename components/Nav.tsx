import Link from 'next/link';

export default function Nav({ home = true }: { home?: boolean }) {
  return (
    <header className="nav">
      <nav aria-label="Main" className="wrap nav-in">
        <Link href="/" className="brand">
          <span className="logo mono">OD</span>
          <span>Osmon Djumagulov</span>
        </Link>
        {home ? (
          <div className="links">
            <a className="navlink hide-sm" href="#work">Work</a>
            <a className="navlink hide-sm" href="#about">About</a>
            <Link className="navlink" href="/resume">Resume</Link>
            <a className="navlink" href="#contact">Contact</a>
          </div>
        ) : (
          <Link className="navlink mono" href="/" style={{ fontSize: 13 }}>
            ← Back home
          </Link>
        )}
      </nav>
    </header>
  );
}
