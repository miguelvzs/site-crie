import Image from "next/image";
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

/** Foto com legenda opcional. Altura fixa (handoff), recorte via object-fit. */
export function Foto({
  src,
  alt,
  nota,
  tone,
  height,
  priority = false,
  imgClassName = "object-cover",
}: {
  src: string;
  alt: string;
  nota?: string;
  tone: "dark" | "light";
  height: number;
  priority?: boolean;
  imgClassName?: string;
}) {
  const isDark = tone === "dark";
  return (
    <figure className="m-0 flex flex-col gap-3">
      <div className="relative w-full overflow-hidden" style={{ height }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 620px"
          priority={priority}
          className={imgClassName}
        />
      </div>
      {nota && (
        <figcaption
          className="font-mono text-[11.5px] font-medium tracking-[.06em]"
          style={{ color: isDark ? "var(--mute-600)" : "var(--mute-450)" }}
        >
          {nota}
        </figcaption>
      )}
    </figure>
  );
}
