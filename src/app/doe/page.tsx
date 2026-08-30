import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import doe from "@content/doe.json";
import site from "@content/site.json";

export const metadata: Metadata = {
  title: "Como Ajudar",
  description: "Doe via PIX, seja voluntário ou firme uma parceria com o CRIE/APAE Extrema.",
};

export default function Doe() {
  return (
    <>
      <Section className="pt-16 sm:pt-24">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground">Como Ajudar</h1>
      </Section>

      <Section id="pix" title="Doação via PIX">
        {doe.pix.pendente ? (
          <p className="text-foreground/70 italic">
            [placeholder: chave PIX/QR code em definição — não publicar chave até confirmação oficial]
          </p>
        ) : (
          <p className="text-foreground/80">{doe.pix.chave}</p>
        )}
      </Section>

      <Section id="voluntariado" title="Voluntariado">
        <p className="text-foreground/80 max-w-2xl mb-6">{doe.voluntariado.texto}</p>
        <Button href={`mailto:${site.contact.email}`} variant="secondary">
          Quero ser voluntário
        </Button>
      </Section>

      <Section id="parcerias" title="Parcerias">
        <p className="text-foreground/80 max-w-2xl">{doe.parcerias.texto}</p>
      </Section>

      <Section id="transparencia" title="Transparência">
        <p className="text-foreground/80 max-w-2xl">{doe.transparencia.texto}</p>
        <p className="mt-2 text-sm text-foreground/70">CNPJ {site.contact.cnpj}</p>
        {!doe.transparencia.relatorioUrl && (
          <p className="mt-2 text-sm text-foreground/60 italic">
            [placeholder: link do relatório de prestação de contas pendente]
          </p>
        )}
      </Section>
    </>
  );
}
