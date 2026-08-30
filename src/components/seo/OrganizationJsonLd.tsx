import content from "@content/landing.json";
import { SITE_URL } from "@/lib/site-url";

const CNPJ = "25.651.282/0001-18";

export function OrganizationJsonLd() {
  const { org, contato } = content;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: org.name,
    alternateName: org.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/crie-logo-oficial.png`,
    foundingDate: String(org.fundacao),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Véu da Noiva, 62",
      addressLocality: "Extrema",
      addressRegion: "MG",
      postalCode: "37640-000",
      addressCountry: "BR",
    },
    telephone: contato.telefone,
    email: contato.email,
    taxID: CNPJ,
    sameAs: [contato.facebook, "https://instagram.com/apaedeextrema"],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
