import siteContent from "@content/site.json";
import { SITE_URL } from "@/lib/site-url";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteContent.org.name,
    alternateName: siteContent.org.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo-crie-original.jpg`,
    foundingDate: "1991",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Véu da Noiva, 62 — Ponte Nova",
      addressLocality: "Extrema",
      addressRegion: "MG",
      postalCode: "37640-000",
      addressCountry: "BR",
    },
    telephone: siteContent.contact.phone,
    email: siteContent.contact.email,
    taxID: siteContent.contact.cnpj,
    sameAs: [siteContent.social.facebook, siteContent.social.instagram],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
