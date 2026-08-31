import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Reveal, Grupo, Item } from "@/components/ui/motion";
import content from "@content/landing.json";

/* Parede de logotipos. Cada célula aceita dois estados e os dois são
   definitivos de design, não um "quebrado" e um "pronto":

   1. `logoUrl` presente — imagem contida numa caixa óptica de altura fixa
   2. `logoUrl` ausente — placa tipográfica com o nome

   A caixa óptica existe porque logotipo não tem proporção padrão: um
   horizontal e um quadrado precisam ocupar o mesmo peso visual na grade.
   `fill` + `object-contain` nunca distorce e nunca causa salto de layout,
   qualquer que seja a proporção do arquivo.

   Especificação dos arquivos em `public/parceiros/README.md`. */
export function Parceiros() {
  const { parceiros } = content;
  if (!parceiros.mostrar) return null;

  return (
    <section id="parceiros" className="border-t border-line-200 bg-warm-100">
      <Container className="py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
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
        </Reveal>

        <Grupo
          as="ul"
          intervalo={0.04}
          className="m-0 mt-12 grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 lg:grid-cols-5"
        >
          {parceiros.itens.map((parceiro) => (
            <Item
              as="li"
              key={parceiro.nome}
              className="flex min-h-28 items-center justify-center border border-line-200 bg-white px-5 py-5"
            >
              {parceiro.logoUrl ? (
                /* Caixa óptica de 64px: logotipo quadrado (o brasão da Prefeitura)
                   fica ilegível numa faixa baixa, e o horizontal já é limitado pela
                   largura da célula — então a altura maior equilibra os dois.
                   `sizes` evita variante de 2000px para um slot de 200. */
                <span className="relative block h-16 w-full">
                  <Image
                    src={parceiro.logoUrl}
                    alt={parceiro.nome}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"
                    className="object-contain"
                  />
                </span>
              ) : (
                <span className="text-center text-base font-semibold leading-[1.25] text-ink-500 text-pretty">
                  {parceiro.nome}
                </span>
              )}
            </Item>
          ))}
        </Grupo>
      </Container>
    </section>
  );
}
