import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Timeline } from "@/components/ui/Timeline";
import content from "@content/quem-somos.json";

export const metadata: Metadata = {
  title: "Quem Somos | CRIE/APAE Extrema",
  description:
    "Conheça a história do CRIE/APAE Extrema, fundado em 1991, e a linha do tempo de certificações da instituição.",
};

export default function QuemSomos() {
  return (
    <>
      <Section className="pt-16 sm:pt-24">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-6">Quem Somos</h1>
        <p className="text-lg text-foreground/80 max-w-3xl">{content.historia}</p>
      </Section>

      <Section id="missao" title="Missão e valores">
        <p className="text-foreground/60 italic">
          [placeholder: texto formal de missão/valores pendente de confirmação com a diretoria]
        </p>
      </Section>

      <Section id="linha-do-tempo" title="Linha do tempo">
        <Timeline items={content.timeline} />
      </Section>

      <Section id="equipe" title="Equipe">
        {content.equipe.length === 0 ? (
          <p className="text-foreground/60 italic">
            [placeholder: fotos, nomes e cargos da equipe pendentes]
          </p>
        ) : null}
      </Section>
    </>
  );
}
