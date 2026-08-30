import type { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  /** Título visível da seção — vira <h2>, garante heading order e serve de aria-labelledby */
  title?: string;
  titleId?: string;
};

export function Section({ title, titleId, className = "", children, ...props }: SectionProps) {
  const headingId = titleId ?? (title ? `${props.id ?? "section"}-heading` : undefined);

  return (
    <section
      className={`py-12 px-4 sm:px-8 max-w-6xl mx-auto ${className}`}
      aria-labelledby={headingId}
      {...props}
    >
      {title && (
        <h2 id={headingId} className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
