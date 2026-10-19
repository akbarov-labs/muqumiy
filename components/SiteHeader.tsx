"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/data";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <>
      <div className="utility-bar">
        <div className="container">
          <span>Дам олиш куни: {site.dayOff}</span>
          <span>
            {site.phones[0].label} · {site.email}
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="container">
          <Link href="/" className="logo">
            <svg width="40" height="46" viewBox="0 0 40 46" role="img" aria-label="Муқимий театри белгиси">
              <path d="M3 45 V20 C3 -3 37 -3 37 20 V45" fill="none" stroke="#E3B04B" strokeWidth="2" />
              <path d="M11 45 V21 C11 6 29 6 29 21 V45" fill="none" stroke="#E3B04B" strokeWidth="1.5" />
            </svg>
            <span className="logo-text">
              <span className="logo-name">{site.name}</span>
              <span className="logo-sub">номидаги театр</span>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Асосий меню">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
