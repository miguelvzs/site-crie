import { Container, Eyebrow } from "@/components/ui/primitives";
import content from "@content/landing.json";

export function Ajudar() {
  const { ajudar } = content;

  return (
    <section id="ajudar" className="bg-warm-100">
      <Container className="py-[100px]">
        <Eyebrow color="var(--verde)">{ajudar.eyebrow}</Eyebrow>
        <h2 className="m-0 mt-[18px] max-w-[820px] font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-.025em] text-pretty sm:text-[2.75rem]">
          {ajudar.titulo}
        </h2>
        <p className="m-0 mt-[18px] max-w-[720px] text-[1.1875rem] leading-[1.55] text-slate-400 text-pretty">
          {ajudar.paragrafo}
        </p>

        <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ajudar.cards.map((card) => (
            <article
              key={card.kicker}
              className={`flex flex-col gap-4 px-[34px] py-10 ${
                card.destaque
                  ? "bg-ink-800 text-warm-100"
                  : "border border-line-200 bg-white"
              }`}
            >
              <span
                className="font-mono text-xs font-medium tracking-[.12em]"
                style={{ color: card.kickerCor }}
              >
                {card.kicker}
              </span>
              <h3 className="m-0 font-display text-[1.8125rem] font-extrabold leading-[1.08] tracking-[-.02em]">
                {card.titulo}
              </h3>
              <p
                className={`m-0 text-[1.03125rem] leading-[1.55] text-pretty ${
                  card.destaque ? "text-body-dark" : "text-slate-400"
                }`}
              >
                {card.corpo}
              </p>

              {card.destaque && (
                <div className="mt-2 flex flex-col gap-2 border-t border-ink-600 pt-5">
                  <span className="font-mono text-xs font-medium text-mute-500">CHAVE PIX</span>
                  {ajudar.chavePix ? (
                    <span className="text-[1.0625rem] font-semibold text-warm-100">{ajudar.chavePix}</span>
                  ) : (
                    <span className="text-[0.9375rem] italic text-mute-500">
                      [pendente: chave Pix oficial não publicada até confirmação da direção]
                    </span>
                  )}
                </div>
              )}

              <a
                href="#contato"
                className={`mt-auto rounded-[2px] px-[26px] py-[15px] text-center text-base font-semibold transition-colors duration-150 ${
                  card.destaque
                    ? "bg-amarelo text-ink-800 hover:bg-white"
                    : "border-2 border-ink-800 text-ink-800 hover:bg-ink-800 hover:text-white"
                }`}
              >
                {card.cta}
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
