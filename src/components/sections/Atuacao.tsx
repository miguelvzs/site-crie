import { Container, Eyebrow } from "@/components/ui/primitives";
import content from "@content/landing.json";

export function Atuacao() {
  const { atuacao } = content;

  return (
    <section id="atuacao" className="border-t border-line-200 bg-white">
      <Container className="py-[100px]">
        <Eyebrow color="var(--magenta)">{atuacao.eyebrow}</Eyebrow>
        <h2 className="m-0 mt-[18px] max-w-[820px] font-display text-[32px] font-extrabold leading-[1.05] tracking-[-.025em] text-pretty sm:text-[44px]">
          {atuacao.titulo}
        </h2>
        <p className="m-0 mt-[18px] max-w-[720px] text-[19px] leading-[1.55] text-slate-400 text-pretty">
          {atuacao.paragrafo}
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {atuacao.cards.map((card) => (
            <article
              key={card.numero}
              className={`flex flex-col gap-[14px] bg-warm-100 px-[30px] pb-[38px] pt-[34px] ${
                card.span === 2 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
              style={{ borderTop: `7px solid ${card.cor}` }}
            >
              <span className="font-mono text-xs font-medium tracking-[.12em] text-mute-400">
                {card.numero}
              </span>
              <h3 className="m-0 font-display text-[27px] font-extrabold leading-[1.1] tracking-[-.02em]">
                {card.titulo}
              </h3>
              <p className="m-0 text-[16.5px] leading-[1.55] text-slate-400 text-pretty">
                {card.corpo}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
