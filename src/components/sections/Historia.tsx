import { Container, Eyebrow, Foto } from "@/components/ui/primitives";
import { porExtenso, capitalizar } from "@/lib/por-extenso";
import { Reveal, Grupo, Item } from "@/components/ui/motion";
import content from "@content/landing.json";

export function Historia() {
  const { historia, org } = content;
  const anos = new Date().getFullYear() - org.fundacao;
  const titulo = `${capitalizar(porExtenso(anos))} anos de reconhecimento`;

  return (
    <section id="historia" className="border-t border-line-200 bg-warm-100">
      <Container className="grid items-start gap-16 py-[100px] lg:grid-cols-[.8fr_1.2fr]">
        <Reveal className="flex flex-col">
          <Eyebrow color="var(--ciano)">{historia.eyebrow}</Eyebrow>
          <h2 className="m-0 mt-[18px] font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-.025em] text-pretty sm:text-[2.75rem]">
            {titulo}
          </h2>
          <div className="mt-8">
            <Foto
              src={historia.imagem.src}
              alt={historia.imagem.alt}
              nota={historia.imagem.nota}
              tone="light"
              height={300}
            />
          </div>
        </Reveal>

        <Grupo as="ol" className="m-0 flex list-none flex-col p-0 pt-2">
          {historia.marcos.map((marco, i) => (
            <Item
              as="li"
              key={marco.ano}
              className={`grid grid-cols-[68px_1fr] gap-7 py-6 sm:grid-cols-[104px_1fr] ${
                i === 0 ? "border-t-2 border-ink-800" : "border-t border-line-300"
              } ${i === historia.marcos.length - 1 ? "border-b-2 border-b-ink-800" : ""}`}
            >
              <span
                className="font-display text-[1.625rem] font-extrabold leading-none tracking-[-.02em]"
                style={{ color: marco.cor }}
              >
                {marco.ano}
              </span>
              <span className="text-[1.09375rem] leading-[1.5] text-ink-500 text-pretty">
                {marco.texto}
              </span>
            </Item>
          ))}
        </Grupo>
      </Container>
    </section>
  );
}
