import { Container, Foto } from "@/components/ui/primitives";
import content from "@content/landing.json";

/** Barra de quatro cores — motivo recorrente da identidade. Manter a ordem. */
const BARRAS = ["#E5006E", "#F2B300", "#8A21CE", "#12A9E0"];

export function Hero() {
  const { hero } = content;

  return (
    <section className="overflow-hidden bg-ink-900 text-warm-100">
      <Container className="grid items-center gap-16 py-[104px] pb-28 lg:grid-cols-[1.1fr_.9fr]">
        <div className="flex flex-col items-start">
          <div aria-hidden="true" className="mb-8 flex gap-[5px]">
            {BARRAS.map((cor) => (
              <span key={cor} className="block h-[7px] w-11" style={{ background: cor }} />
            ))}
          </div>
          <h1 className="m-0 font-display text-[2.5rem] font-extrabold leading-[1.02] tracking-[-.03em] text-pretty sm:text-[3.25rem] lg:text-[4.125rem]">
            {hero.titulo}
          </h1>
          <p className="mt-[26px] max-w-[620px] text-[1.1875rem] leading-[1.5] text-body-dark text-pretty sm:text-[1.3125rem]">
            {hero.paragrafo}
          </p>
          <div className="mt-10 flex flex-wrap gap-[14px]">
            <a
              href="#ajudar"
              className="rounded-[2px] bg-amarelo px-8 py-[17px] text-[1.0625rem] font-semibold text-ink-800 transition-colors duration-150 hover:bg-white"
            >
              {hero.ctaPrimario}
            </a>
            <a
              href="#atuacao"
              className="rounded-[2px] border-2 border-ink-500 px-8 py-[17px] text-[1.0625rem] font-semibold text-warm-100 transition-colors duration-150 hover:border-warm-100"
            >
              {hero.ctaSecundario}
            </a>
          </div>
        </div>

        <Foto
          src={hero.imagem.src}
          alt={hero.imagem.alt}
          nota={hero.imagem.nota}
          tone="dark"
          height={440}
          priority
        />
      </Container>
    </section>
  );
}
