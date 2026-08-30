import { Container, Eyebrow } from "@/components/ui/primitives";
import content from "@content/landing.json";

/** Handoff: grid fixo, deliberadamente. Não converter em carrossel — esconde conteúdo e prejudica a11y. */
export function Depoimentos() {
  const { depoimentos } = content;
  if (!depoimentos.mostrar) return null;

  return (
    <section className="bg-roxo text-white">
      <Container className="py-24">
        <Eyebrow color="var(--roxo-claro)">{depoimentos.eyebrow}</Eyebrow>
        <h2 className="mb-10 mt-[18px] max-w-[760px] font-display text-[30px] font-extrabold leading-[1.05] tracking-[-.025em] text-pretty sm:text-[40px]">
          {depoimentos.titulo}
        </h2>
        <div className="grid items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {depoimentos.itens.map((item) => (
            <figure
              key={item.nome}
              className="m-0 flex flex-col gap-6 bg-white/12 px-8 py-[34px]"
            >
              <blockquote className="m-0 font-display text-[22px] font-semibold leading-[1.32] tracking-[-.01em] text-pretty">
                &ldquo;{item.citacao}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex flex-col gap-1 border-t border-white/28 pt-5">
                <span className="font-mono text-xs font-medium uppercase tracking-[.12em] text-white">
                  {item.nome}
                </span>
                {item.relacao && (
                  <span className="text-[15.5px] text-roxo-claro">{item.relacao}</span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
