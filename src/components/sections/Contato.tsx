import { Container, Eyebrow } from "@/components/ui/primitives";
import { ContatoForm } from "./ContatoForm";
import { Reveal } from "@/components/ui/motion";
import content from "@content/landing.json";

const labelClasses = "font-mono text-xs font-medium tracking-[.12em] text-mute-600";
const valorClasses = "text-lg text-warm-100";
const linkClasses = `${valorClasses} transition-colors duration-150 hover:text-amarelo`;

export function Contato() {
  const { contato } = content;

  return (
    <section id="contato" className="bg-ink-900 text-warm-100">
      <Container className="grid gap-[72px] py-[100px] lg:grid-cols-2">
        <Reveal className="flex flex-col">
          <Eyebrow color="var(--amarelo)">{contato.eyebrow}</Eyebrow>
          <h2 className="m-0 mt-[18px] font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-.025em] text-pretty sm:text-[2.75rem]">
            {contato.titulo}
          </h2>
          <p className="m-0 mt-5 max-w-[520px] text-[1.1875rem] leading-[1.55] text-body-dark text-pretty">
            {contato.paragrafo}
          </p>

          <address className="mt-11 flex flex-col gap-6 not-italic">
            <span className="flex flex-col gap-[6px]">
              <span className={labelClasses}>ENDEREÇO</span>
              <span className={valorClasses}>{contato.endereco}</span>
            </span>
            <span className="flex flex-col gap-[6px]">
              <span className={labelClasses}>TELEFONE E WHATSAPP</span>
              <a href={contato.telefoneHref} className={linkClasses}>
                {contato.telefone}
              </a>
            </span>
            <span className="flex flex-col gap-[6px]">
              <span className={labelClasses}>E-MAIL</span>
              <a href={`mailto:${contato.email}`} className={linkClasses}>
                {contato.email}
              </a>
            </span>
            <span className="flex flex-col gap-[6px]">
              <span className={labelClasses}>REDES</span>
              <a href={contato.facebook} className={linkClasses}>
                {contato.facebookLabel}
              </a>
            </span>
            {contato.horarioAtendimento && (
              <span className="flex flex-col gap-[6px]">
                <span className={labelClasses}>HORÁRIO DE ATENDIMENTO</span>
                <span className={valorClasses}>{contato.horarioAtendimento}</span>
              </span>
            )}
          </address>
        </Reveal>

        <ContatoForm />
      </Container>
    </section>
  );
}
