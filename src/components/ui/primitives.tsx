import type { ReactNode } from "react";

/** Contêiner de 1240px com padding horizontal de 32px (handoff: Design Tokens → Espaçamento). */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-8 ${className}`}>{children}</div>;
}

/** Rótulo mono uppercase acima de cada H2. A cor muda por seção. */
export function Eyebrow({ children, color }: { children: ReactNode; color: string }) {
  return (
    <span
      className="font-mono text-[13px] font-medium uppercase tracking-[.16em]"
      style={{ color }}
    >
      {children}
    </span>
  );
}

/** Placeholder hachurado de imagem. Todos os blocos assim são vazios a preencher com foto real. */
export function ImagePlaceholder({
  legenda,
  nota,
  tone,
  height,
}: {
  legenda: string;
  nota: string;
  tone: "dark" | "light";
  height: number;
}) {
  const isDark = tone === "dark";
  return (
    <div className="flex flex-col gap-3">
      <div
        className={`flex items-end justify-center p-5 ${isDark ? "hatch-dark" : "hatch-light"}`}
        style={{ height }}
      >
        <span
          className="text-center font-mono text-[12.5px] font-medium uppercase tracking-[.1em]"
          style={{ color: isDark ? "var(--mute-500)" : "var(--mute-400)" }}
        >
          {legenda}
        </span>
      </div>
      <span
        className="font-mono text-[11.5px] font-medium tracking-[.06em]"
        style={{ color: isDark ? "var(--mute-600)" : "var(--mute-450)" }}
      >
        {nota}
      </span>
    </div>
  );
}
