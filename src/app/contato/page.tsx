import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import site from "@content/site.json";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com o CRIE/APAE Extrema.",
};

export default function Contato() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.contact.address)}&output=embed`;

  return (
    <Section className="pt-16 sm:pt-24">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-10">Contato</h1>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-4">Envie uma mensagem</h2>
          <ContactForm email={site.contact.email} />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Onde estamos</h2>
          <address className="not-italic text-foreground/80 flex flex-col gap-1 mb-4">
            <span>{site.contact.address}</span>
            <a href={site.contact.phoneHref} className="underline hover:no-underline">
              {site.contact.phone}
            </a>
            <a href={`mailto:${site.contact.email}`} className="underline hover:no-underline">
              {site.contact.email}
            </a>
          </address>
          <iframe
            src={mapSrc}
            title={`Mapa de localização — ${site.org.shortName}`}
            className="w-full h-72 rounded-xl border border-black/10"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
}
