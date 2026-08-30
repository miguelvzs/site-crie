import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/primitives";
import content from "@content/landing.json";

/** Handoff: células são placas tipográficas provisórias — trocar pelos logotipos oficiais quando chegarem. */
export function Parceiros() {
  const { parceiros } = content;
  if (!parceiros.mostrar) return null;

  const faltaLogo = parceiros.itens.some((p) => !p.logoUrl);

  return (
    <section id="parceiros" className="border-t border-line-200 bg-warm-100">
      <Container className="py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col">
            <Eyebrow color="var(--ciano)">{parceiros.eyebrow}</Eyebrow>
            <h2 className="m-0 mt-[18px] max-w-[640px] font-display text-[1.875rem] font-extrabold leading-[1.05] tracking-[-.025em] text-pretty sm:text-[2.5rem]">
              {parceiros.titulo}
            </h2>
          </div>
          <a
            href="#ajudar"
            className="rounded-[2px] border-2 border-ink-800 px-[26px] py-[14px] text-base font-semibold text-ink-800 transition-colors duration-150 hover:bg-ink-800 hover:text-white"
          >
            {parceiros.cta}
          </a>
        </div>

        <ul className="m-0 mt-12 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 lg:grid-cols-5">
          {parceiros.itens.map((parceiro) => (
            <li
              key={parceiro.nome}
              className="flex min-h-24 items-center justify-center border border-line-200 bg-white px-4 py-[18px] text-center text-base font-semibold leading-[1.25] text-ink-500 text-pretty"
            >
              {parceiro.logoUrl ? (
                <Image
                  src={parceiro.logoUrl}
                  alt={parceiro.nome}
                  width={160}
                  height={44}
                  className="max-h-11 w-auto object-contain"
                />
              ) : (
                parceiro.nome
              )}
            </li>
          ))}
        </ul>

        {faltaLogo && (
          <span className="mt-5 block font-mono text-[0.71875rem] font-medium tracking-[.06em] text-mute-450">
            {parceiros.nota}
          </span>
        )}
      </Container>
    </section>
  );
}
