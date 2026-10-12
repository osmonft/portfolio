import Link from 'next/link';
import { SITE } from '@/lib/data';

export const NAV = [
  { href: '/work', label: 'Work' },
  { href: '/resume', label: 'Résumé' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="site-header">
      <Link className="label" href="/">{SITE.name}</Link>
      <nav aria-label="Primary">
        <ul>
          {NAV.map((n) => (
            <li key={n.href}>
              <Link className="label link" href={n.href} aria-current={current === n.href ? 'page' : undefined}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
