import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import areas from "@content/areas-de-atuacao.json";

export default function Home() {
  return (
    <>
      <Section className="py-16 sm:py-24 text-center" title={undefined}>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground max-w-3xl mx-auto">
          Desenvolvendo potencialidades, construindo inclusão desde 1991
        </h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          CRIE/APAE Extrema atende pessoas com deficiência intelectual e suas famílias em Extrema/MG.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/doe">Doe agora</Button>
          <Button href="/areas-de-atuacao" variant="outline">Conheça os projetos</Button>
        </div>
        <p className="mt-6 text-sm text-foreground/60">[placeholder: foto real da instituição entra aqui]</p>
      </Section>

      <Section id="areas" title="Áreas de atuação">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Card key={area.id}>
              <h3 className="font-bold text-lg mb-2">{area.titulo}</h3>
              <p className="text-sm text-foreground/80">{area.resumo}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="ajudar" title="Como ajudar">
        <p className="mb-6 text-foreground/80">
          Doação via PIX, voluntariado ou parceria — dados de doação em breve.
        </p>
        <Button href="/doe" variant="secondary">Saiba como ajudar</Button>
      </Section>
    </>
  );
}
