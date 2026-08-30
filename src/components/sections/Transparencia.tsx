import { Container, Eyebrow } from "@/components/ui/primitives";
import content from "@content/landing.json";

export function Transparencia() {
  const { transparencia } = content;
  if (!transparencia.mostrar) return null;

  const temDocumento = transparencia.documentos.some((d) => d.url);

  return (
    <section id="transparencia" className="border-t border-line-200 bg-white">
      <Container className="grid items-start gap-16 py-24 lg:grid-cols-[.9fr_1.1fr]">
        <div className="flex flex-col">
          <Eyebrow color="var(--amarelo)">{transparencia.eyebrow}</Eyebrow>
          <h2 className="m-0 mt-[18px] font-display text-[1.875rem] font-extrabold leading-[1.05] tracking-[-.025em] text-pretty sm:text-[2.5rem]">
            {transparencia.titulo}
          </h2>
          <p className="m-0 mt-[18px] text-lg leading-[1.55] text-slate-400 text-pretty">
            {transparencia.paragrafo}
          </p>
        </div>

        <ul className="m-0 flex list-none flex-col p-0">
          {transparencia.documentos.map((doc, i) => {
            const linhas = `flex items-center justify-between gap-6 py-[22px] ${
              i === 0 ? "border-t-2 border-line-200" : "border-t border-line-200"
            } ${i === transparencia.documentos.length - 1 ? "border-b-2 border-b-line-200" : ""}`;

            return (
              <li key={doc.titulo}>
                {doc.url ? (
                  <a href={doc.url} className={`${linhas} text-ink-800 transition-colors duration-150 hover:text-magenta`}>
                    <span className="text-[1.1875rem] font-semibold">{doc.titulo}</span>
                    <span className="font-mono text-xs font-medium tracking-[.1em] text-mute-400">PDF</span>
                  </a>
                ) : (
                  <div className={`${linhas} text-ink-800`}>
                    <span className="text-[1.1875rem] font-semibold">{doc.titulo}</span>
                    <span className="font-mono text-xs font-medium tracking-[.1em] text-mute-400">
                      em breve
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {!temDocumento && (
          <span className="font-mono text-[0.71875rem] font-medium tracking-[.06em] text-mute-450 lg:col-start-2">
            Documentos ainda não enviados pela instituição — publicar os PDFs reais antes de divulgar o site.
          </span>
        )}
      </Container>
    </section>
  );
}
