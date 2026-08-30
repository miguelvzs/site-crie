import { Container, Eyebrow, Foto } from "@/components/ui/primitives";
import content from "@content/landing.json";

export function QuemSomos() {
  const { quemSomos } = content;

  return (
    <section id="quem-somos" className="bg-warm-100">
      <Container className="grid items-start gap-16 py-[100px] pb-[88px] lg:grid-cols-2">
        <div className="flex flex-col">
          <Eyebrow color="var(--roxo)">{quemSomos.eyebrow}</Eyebrow>
          <h2 className="m-0 mt-[18px] font-display text-[32px] font-extrabold leading-[1.05] tracking-[-.025em] text-pretty sm:text-[44px]">
            {quemSomos.titulo}
          </h2>
          <div className="mt-9">
            <Foto
              src={quemSomos.imagem.src}
              alt={quemSomos.imagem.alt}
              nota={quemSomos.imagem.nota}
              tone="light"
              height={340}
              imgClassName="object-contain object-left mix-blend-multiply"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[18px] pt-2">
          {quemSomos.paragrafos.map((p) => (
            <p key={p} className="m-0 text-[19px] leading-[1.6] text-ink-500 text-pretty">
              {p}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
