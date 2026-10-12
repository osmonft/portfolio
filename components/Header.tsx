"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile, routes } from "@/content/site";

// Fixed, drawn in difference mode so it reads over any image.
export function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div data-intro="0">
        <span className="mask">
          <Link href="/" className="label" data-page>{profile.name}</Link>
        </span>
      </div>
      <nav aria-label="Primary">
        <ul data-intro="0">
          {routes.map((r) => (
            <li key={r.href} className="mask">
              <Link
                href={r.href}
                className="label link"
                data-page
                aria-current={pathname.startsWith(r.href) ? "page" : undefined}
              >
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
