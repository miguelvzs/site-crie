import { Container } from "@/components/ui/primitives";
import content from "@content/landing.json";

export function Credenciais() {
  const { credenciais } = content;

  return (
    <div className="border-t border-ink-600 bg-ink-800">
      <Container className="flex flex-wrap items-center gap-x-[52px] gap-y-4 py-[26px]">
        <span className="font-mono text-[0.8125rem] font-medium uppercase tracking-[.12em] text-amarelo">
          {credenciais.destaque}
        </span>
        {credenciais.itens.map((item) => (
          <span key={item} className="text-base text-body-dark">
            {item}
          </span>
        ))}
      </Container>
    </div>
  );
}
