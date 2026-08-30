"use client";

import { useState } from "react";
import content from "@content/landing.json";

type Estado = "idle" | "submitting" | "success" | "error";

const campoClasses =
  "min-h-[52px] rounded-[2px] border border-ink-600 bg-ink-900 px-4 py-[15px] text-[17px] text-warm-100 placeholder:text-mute-600 focus:border-ciano";

const labelClasses = "font-mono text-xs font-medium tracking-[.1em] text-mute-500";

export function ContatoForm() {
  const { formulario } = content.contato;
  const [estado, setEstado] = useState<Estado>("idle");
  const [erro, setErro] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const dados = Object.fromEntries(new FormData(form));

    setEstado("submitting");
    setErro(null);

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { erro?: string };
        setErro(body.erro ?? "Não foi possível enviar a mensagem. Tente novamente ou use o telefone.");
        setEstado("error");
        return;
      }

      form.reset();
      setEstado("success");
    } catch {
      setErro("Falha de conexão. Verifique sua internet e tente novamente.");
      setEstado("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-ink-800 px-10 py-11">
      <h3 className="m-0 font-display text-[26px] font-extrabold leading-[1.1] tracking-[-.02em]">
        {formulario.titulo}
      </h3>

      {/* honeypot — invisível para pessoas, atrai bots. Não usar display:none puro em campo real. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label htmlFor="nome" className="flex flex-col gap-2">
        <span className={labelClasses}>NOME</span>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          placeholder="Seu nome completo"
          className={campoClasses}
        />
      </label>

      <label htmlFor="contato" className="flex flex-col gap-2">
        <span className={labelClasses}>E-MAIL OU TELEFONE</span>
        <input
          id="contato"
          name="contato"
          type="text"
          required
          placeholder="Como podemos responder"
          className={campoClasses}
        />
      </label>

      <label htmlFor="assunto" className="flex flex-col gap-2">
        <span className={labelClasses}>ASSUNTO</span>
        <select id="assunto" name="assunto" className={campoClasses}>
          {formulario.assuntos.map((assunto) => (
            <option key={assunto}>{assunto}</option>
          ))}
        </select>
      </label>

      <label htmlFor="mensagem" className="flex flex-col gap-2">
        <span className={labelClasses}>MENSAGEM</span>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          required
          minLength={10}
          placeholder="Escreva aqui"
          className={`${campoClasses} resize-y leading-[1.5]`}
        />
      </label>

      <label htmlFor="consentimento" className="flex items-start gap-3 text-[14.5px] leading-[1.45] text-mute-500">
        <input
          id="consentimento"
          name="consentimento"
          type="checkbox"
          required
          className="mt-1 h-5 w-5 flex-none accent-amarelo"
        />
        <span>
          Autorizo o CRIE a usar os dados acima para responder a esta mensagem. Os dados não são
          compartilhados com terceiros e podem ser removidos a pedido.
        </span>
      </label>

      <button
        type="submit"
        disabled={estado === "submitting"}
        className="min-h-[54px] rounded-[2px] bg-amarelo px-6 py-[17px] text-[17px] font-semibold text-ink-800 transition-colors duration-150 hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {estado === "submitting" ? "Enviando…" : formulario.botaoLabel}
      </button>

      <p aria-live="polite" className="m-0 text-[14.5px] leading-[1.45] text-pretty">
        {estado === "success" && (
          <span className="text-amarelo">
            Mensagem enviada. A equipe responde pelo contato informado.
          </span>
        )}
        {estado === "error" && <span className="text-magenta">{erro}</span>}
      </p>
    </form>
  );
}
