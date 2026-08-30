import { NextResponse } from "next/server";
import content from "@content/landing.json";

type Payload = {
  nome?: unknown;
  contato?: unknown;
  assunto?: unknown;
  mensagem?: unknown;
  consentimento?: unknown;
  website?: unknown;
};

function texto(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export function validar(p: Payload): string | null {
  if (texto(p.website)) return "spam";
  if (texto(p.nome).length < 2) return "Informe seu nome.";
  if (texto(p.contato).length < 6) return "Informe um e-mail ou telefone válido para resposta.";
  if (texto(p.mensagem).length < 10) return "Escreva uma mensagem com um pouco mais de detalhe.";
  if (!p.consentimento) return "É preciso autorizar o uso dos dados para responder.";
  return null;
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => ({}))) as Payload;

  const erro = validar(payload);
  if (erro === "spam") {
    // honeypot preenchido: responde 200 para não ensinar o bot, mas não envia nada
    return NextResponse.json({ ok: true });
  }
  if (erro) {
    return NextResponse.json({ erro }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const destino = process.env.CONTATO_EMAIL_DESTINO ?? content.contato.email;

  if (!apiKey) {
    console.error("[contato] RESEND_API_KEY ausente — mensagem não enviada.");
    return NextResponse.json(
      {
        erro: `O envio pelo site ainda não está configurado. Escreva para ${destino} ou ligue para ${content.contato.telefone}.`,
      },
      { status: 503 },
    );
  }

  const corpo = [
    `Nome: ${texto(payload.nome)}`,
    `Contato: ${texto(payload.contato)}`,
    `Assunto: ${texto(payload.assunto)}`,
    "",
    texto(payload.mensagem),
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTATO_EMAIL_REMETENTE ?? "site@crieextrema.com.br",
      to: destino,
      reply_to: texto(payload.contato).includes("@") ? texto(payload.contato) : undefined,
      subject: `[Site] ${texto(payload.assunto) || "Contato"} — ${texto(payload.nome)}`,
      text: corpo,
    }),
  });

  if (!res.ok) {
    console.error("[contato] Resend respondeu", res.status, await res.text());
    return NextResponse.json(
      { erro: "Não foi possível enviar agora. Tente novamente ou use o telefone." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
