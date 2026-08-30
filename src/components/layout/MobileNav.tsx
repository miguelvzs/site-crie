"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = { label: string; href: string };

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen((v) => !v)}
        className="sm:hidden inline-flex items-center justify-center rounded-lg p-2 text-foreground focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
      >
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
        <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      <nav id="main-nav" aria-label="Principal" className={open ? "block sm:block" : "hidden sm:block"}>
        <ul className="flex flex-col sm:flex-row gap-1 sm:gap-6 py-4 sm:py-0 text-lg sm:text-base font-medium">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-2 py-2 rounded hover:text-brand-blue focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
