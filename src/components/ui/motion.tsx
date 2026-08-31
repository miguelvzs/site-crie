"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

/* Movimento sóbrio, por decisão de design: distância curta, sem escala, sem
   mola. O handoff não pede animação — o que entra aqui existe para dar ordem
   de leitura, não para chamar atenção.

   `prefers-reduced-motion` desliga tudo: os componentes devolvem o conteúdo
   sem wrapper de animação (ver `useReducedMotion` em cada um). O CSS global
   já corta transições, mas não alcança animação em JS.

   Sem JS, o `<noscript>` do layout força `[data-reveal]` a ficar visível. */

const DISTANCIA = 16;
const DURACAO = 0.5;
const EASE = [0.22, 0.61, 0.36, 1] as const;

/** `once: true` — nada reanima ao rolar de volta. `amount` baixo para o bloco
    não esperar entrar inteiro na tela em telas pequenas. */
const VIEWPORT = { once: true, amount: 0.2, margin: "0px 0px -60px 0px" } as const;

const surgir: Variants = {
  oculto: { opacity: 0, y: DISTANCIA },
  visivel: { opacity: 1, y: 0, transition: { duration: DURACAO, ease: EASE } },
};

type Props = {
  children: ReactNode;
  className?: string;
  /** Segundos de atraso. Use para escalonar irmãos que não estão num Grupo. */
  delay?: number;
};

/** Bloco que surge ao entrar na viewport. */
export function Reveal({ children, className, delay = 0 }: Props) {
  const reduzir = useReducedMotion();
  if (reduzir) return <div className={className}>{children}</div>;

  return (
    <motion.div
      data-reveal
      className={className}
      variants={surgir}
      initial="oculto"
      whileInView="visivel"
      viewport={VIEWPORT}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Container que escalona os `Item` filhos. Aplique a classe do grid aqui. */
export function Grupo({
  children,
  className,
  intervalo = 0.07,
  as = "div",
}: Props & { intervalo?: number; as?: "div" | "ul" | "ol" }) {
  const reduzir = useReducedMotion();
  const Tag = as;
  if (reduzir) return <Tag className={className}>{children}</Tag>;

  const Motion = motion[as];
  return (
    <Motion
      className={className}
      initial="oculto"
      whileInView="visivel"
      viewport={VIEWPORT}
      variants={{ visivel: { transition: { staggerChildren: intervalo } } }}
    >
      {children}
    </Motion>
  );
}

/** Filho de `Grupo`. Fora de um Grupo não anima — herda o estado do pai. */
export function Item({
  children,
  className,
  style,
  as = "div",
}: Omit<Props, "delay"> & { style?: CSSProperties; as?: "div" | "li" | "article" | "figure" }) {
  const reduzir = useReducedMotion();
  const Tag = as;
  if (reduzir)
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );

  const Motion = motion[as];
  return (
    <Motion data-reveal className={className} style={style} variants={surgir}>
      {children}
    </Motion>
  );
}

/** Entrada do hero: roda no load, não no scroll — já está na viewport.
    A foto fica de fora de propósito: é o elemento de LCP e não deve esperar. */
export function HeroEntrada({ children, className }: Omit<Props, "delay">) {
  const reduzir = useReducedMotion();
  if (reduzir) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="oculto"
      animate="visivel"
      variants={{ visivel: { transition: { staggerChildren: 0.08 } } }}
    >
      {children}
    </motion.div>
  );
}

/** Filho de `HeroEntrada`. */
export function HeroItem({ children, className }: Omit<Props, "delay">) {
  const reduzir = useReducedMotion();
  if (reduzir) return <div className={className}>{children}</div>;

  return (
    <motion.div data-reveal className={className} variants={surgir}>
      {children}
    </motion.div>
  );
}

/** Barra de quatro cores do hero: cada faixa cresce da esquerda, na ordem.
    A ordem das cores é motivo de identidade (constitution) — não embaralhar. */
export function BarraCores({ cores, className }: { cores: readonly string[]; className?: string }) {
  const reduzir = useReducedMotion();

  return (
    <div aria-hidden="true" className={className}>
      {cores.map((cor, i) =>
        reduzir ? (
          <span key={cor} className="block h-[7px] w-11" style={{ background: cor }} />
        ) : (
          <motion.span
            key={cor}
            className="block h-[7px] w-11 origin-left"
            style={{ background: cor }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: EASE }}
          />
        ),
      )}
    </div>
  );
}
