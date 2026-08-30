# Spec — Página Contato (`/contato`)

Status: draft

## Blocos
- Formulário acessível (nome, e-mail, mensagem)
- Endereço, telefone, e-mail (`content/site.json`)
- Mapa incorporado (iframe Google Maps embed, sem API key — endereço real)
- Redes sociais

## Decisão técnica (Plan)
V1 é SSG sem backend obrigatório (constitution). Form usa `action="mailto:..."` (nativo, zero dependência) — funcional hoje, sem servidor. Upgrade futuro: Vercel Function + serviço de e-mail (Resend) ou Formspree, quando o projeto ganhar backend. Documentado como pendência não-bloqueante.

## Critério de aceite
- [ ] Campos com `<label>` associado, `required`, `type=email` no e-mail
- [ ] Navegável e submetível só por teclado
- [ ] Mapa com `title` descritivo no iframe (a11y)
- [ ] Foco visível em todos os campos
