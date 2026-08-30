import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import areas from "@content/areas-de-atuacao.json";

export const metadata: Metadata = {
  title: "Áreas de Atuação | CRIE/APAE Extrema",
  description: "Conheça as 5 áreas de atuação do CRIE/APAE Extrema.",
};

export default function AreasDeAtuacao() {
  return (
    <>
      <Section className="pt-16 sm:pt-24">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground">Áreas de Atuação</h1>
      </Section>

      {areas.map((area) => (
        <Section key={area.id} id={area.id} title={area.titulo}>
          <p className="text-foreground/80 max-w-2xl">{area.resumo}</p>
          {!area.textoCompleto && (
            <p className="mt-3 text-sm text-foreground/60 italic">
              [placeholder: texto completo desta área pendente]
            </p>
          )}
        </Section>
      ))}
    </>
  );
}
