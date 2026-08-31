"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/primitives";
import content from "@content/landing.json";

export function Header() {
  const [open, setOpen] = useState(false);
  const botaoRef = useRef<HTMLButtonElement>(null);
  const reduzir = useReducedMotion();
  const { org, nav } = content;

  // Esc fecha o menu e devolve o foco ao botão que o abriu (WCAG 2.1.2).
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setOpen(false);
      botaoRef.current?.focus();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const links = nav.map((item) => (
    <a
      key={item.href}
      href={item.href}
      onClick={() => setOpen(false)}
      className="py-2 text-base font-medium text-ink-500 transition-colors duration-150 hover:text-magenta lg:py-0"
    >
      {item.label}
    </a>
  ));

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
            <span className="text-[0.84375rem] font-semibold leading-[1.25] text-ink-500">
              {org.lockupLinha1}
              <br />
              {org.lockupLinha2}
            </span>
            <span className="font-mono text-[0.625rem] font-medium tracking-[.1em] text-mute-400">
              {org.lockupLocal}
            </span>
          </span>
        </a>

        {/* Desktop: nav sempre no DOM. Mobile: painel abre e fecha com altura.
            AnimatePresence so no mobile — no desktop o menu nunca desmonta. */}
        <nav
          aria-label="Principal"
          className="hidden lg:static lg:ml-auto lg:flex lg:flex-row lg:flex-wrap lg:gap-[30px] lg:border-0 lg:bg-transparent lg:p-0"
        >
          {links}
        </nav>

        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              id="nav-principal"
              aria-label="Principal"
              className="absolute left-0 right-0 top-full overflow-hidden border-b border-line-200 bg-warm-100 lg:hidden"
              initial={reduzir ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduzir ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="flex flex-col gap-1 p-4">{links}</div>
            </motion.nav>
          )}
        </AnimatePresence>

        <a
          href="#ajudar"
          className="ml-auto flex-none rounded-[2px] bg-ink-800 px-6 py-[13px] text-base font-semibold text-white transition-colors duration-150 hover:bg-magenta lg:ml-0"
        >
          Doar agora
        </a>

        <button
          type="button"
          ref={botaoRef}
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
