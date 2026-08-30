import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import content from "@content/landing.json";

export function Footer() {
  const { footer, nav, org } = content;

  return (
    <footer className="border-t border-ink-600 bg-ink-800 text-mute-500">
      <Container className="flex flex-wrap items-center justify-between gap-7 py-11">
        <div className="flex items-center gap-[18px]">
          {/* placa clara: o traço do logotipo é escuro e sumiria no fundo preto */}
          <span className="flex flex-none items-center justify-center rounded bg-warm-100 px-[14px] py-[10px]">
            <Image
              src="/brand/crie-logo-oficial.png"
              alt={org.name}
              width={96}
              height={45}
              className="h-[45px] w-24 object-contain"
            />
          </span>
          <span className="text-[15.5px] leading-[1.45]">
            {footer.linha1}
            <br />
            {footer.linha2}
          </span>
        </div>

        <nav aria-label="Rodapé" className="flex flex-wrap gap-[26px]">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15.5px] text-mute-500 transition-colors duration-150 hover:text-warm-100"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/noticias"
            className="text-[15.5px] text-mute-500 transition-colors duration-150 hover:text-warm-100"
          >
            Notícias
          </Link>
        </nav>
      </Container>
    </footer>
  );
}
