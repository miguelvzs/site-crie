"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/primitives";
import content from "@content/landing.json";

export function Header() {
  const [open, setOpen] = useState(false);
  const { org, nav } = content;

  return (
    <header className="sticky top-0 z-50 border-b border-line-200 bg-warm-100/93 backdrop-blur-[12px]">
      <Container className="flex items-center gap-6 py-4 lg:gap-10">
        <a href="#" className="flex flex-none items-center gap-4" aria-label={`${org.name} — início`}>
          <Image
            src="/brand/crie-logo-oficial.png"
            alt={org.name}
            width={118}
            height={55}
            priority
            className="h-[55px] w-[118px] object-contain"
          />
          <span className="hidden flex-col gap-[3px] border-l border-line-300 pl-4 sm:flex">
            <span className="text-[13.5px] font-semibold leading-[1.25] text-ink-500">
              {org.lockupLinha1}
              <br />
              {org.lockupLinha2}
            </span>
            <span className="font-mono text-[10px] font-medium tracking-[.1em] text-mute-400">
              {org.lockupLocal}
            </span>
          </span>
        </a>

        <nav
          id="nav-principal"
          aria-label="Principal"
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-1 border-b border-line-200 bg-warm-100 p-4 lg:static lg:ml-auto lg:flex lg:flex-row lg:flex-wrap lg:gap-[30px] lg:border-0 lg:bg-transparent lg:p-0`}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-base font-medium text-ink-500 transition-colors duration-150 hover:text-magenta lg:py-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#ajudar"
          className="ml-auto flex-none rounded-[2px] bg-ink-800 px-6 py-[13px] text-base font-semibold text-white transition-colors duration-150 hover:bg-magenta lg:ml-0"
        >
          Doar agora
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="nav-principal"
          onClick={() => setOpen((v) => !v)}
          className="flex-none rounded-[2px] border-2 border-ink-800 p-2 text-ink-800 lg:hidden"
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>
    </header>
  );
}
