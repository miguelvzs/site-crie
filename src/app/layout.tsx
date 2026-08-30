import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VLibrasWidget } from "@/components/a11y/VLibrasWidget";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { SITE_URL } from "@/lib/site-url";
import siteContent from "@content/site.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Instituição sem fins lucrativos fundada em 1991, dedicada ao atendimento de pessoas com deficiência intelectual e suas famílias em Extrema/MG.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: siteContent.org.shortName, template: `%s | ${siteContent.org.shortName}` },
  description,
  openGraph: {
    title: siteContent.org.shortName,
    description,
    locale: "pt_BR",
    type: "website",
    images: ["/brand/logo-crie-original.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        <SkipLink />
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
