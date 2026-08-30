import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/layout/SkipLink";
import { TopBar } from "@/components/sections/TopBar";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { VLibrasWidget } from "@/components/a11y/VLibrasWidget";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { SITE_URL } from "@/lib/site-url";
import content from "@content/landing.json";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const description =
  "O CRIE atende gratuitamente pessoas com deficiência e suas famílias em Extrema, no sul de Minas Gerais. Fundado em 1991, é filiado à Federação das APAEs.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${content.org.name} — Extrema/MG`,
    template: `%s | ${content.org.shortName}`,
  },
  description,
  openGraph: {
    title: content.org.name,
    description,
    locale: "pt_BR",
    type: "website",
    images: ["/brand/crie-logo-oficial.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${bricolage.variable} ${archivo.variable} ${plexMono.variable}`}
    >
      <body className="flex min-h-full flex-col">
        <OrganizationJsonLd />
        <SkipLink />
        <TopBar />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <VLibrasWidget />
      </body>
    </html>
  );
}
