# Constitution — Site institucional CRIE / APAE Extrema

Fontes, em ordem de precedência:
1. **`docs/handoff/README.md`** — handoff de design hifi. Fonte de verdade para layout, copy, tokens e comportamento.
2. `brief_site_crie.md` (Miguel) — contexto e requisitos originais.

Onde os dois divergem, o handoff vence. Onde o handoff é silencioso (ex.: blog), o brief vale.

## Projeto
Site institucional/vitrine (sem login) do CRIE — Centro de Integração Especial / APAE de Extrema (MG), ONG fundada 1991, atende pessoas com deficiência intelectual e famílias. Substitui WordPress abandonado desde 2019.

Objetivos, em ordem (handoff): 1) captar apoio (doação, voluntariado, parceria com empresas), 2) explicar o atendimento às famílias, 3) dar credibilidade.

Público: famílias, voluntários, empresas do parque industrial de Extrema (alvo explícito de captação), poder público.

## Arquitetura
**Landing page única com âncoras internas** (`#quem-somos`, `#atuacao`, `#historia`, `#ajudar`, `#parceiros`, `#contato`) — decisão do handoff, substituiu a proposta anterior de 6 rotas separadas.

Rota adicional fora do handoff: `/noticias` (blog MDX), pedido pelo brief. Linkada só no rodapé.

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 (tokens em `@theme`, sem `tailwind.config.js`)
- Deploy Vercel; landing é estática, `/api/contato` é a única rota dinâmica
- `next/image` todas imagens, `next/font` fontes (Bricolage Grotesque, Archivo, IBM Plex Mono — self-hosted pelo next/font, não Google Fonts em runtime)
- Conteúdo em `content/landing.json` e `content/noticias/*.mdx`, fora dos componentes
- Git desde início, commits pequenos e descritivos

## Design (handoff manda)
- Tokens exatos em `src/app/globals.css`, espelhando `docs/handoff/README.md` → Design Tokens. Não improvisar valores
- Cantos vivos (`border-radius: 2px` só em botões/campos, 4px na placa do logo), **zero sombra** — separação por cor de fundo e borda de 1px
- Sem ícones decorativos (decisão de design)
- Sem carrossel — depoimentos e parceiros são grid fixo, deliberadamente (esconde conteúdo, prejudica a11y)
- Sem animação de entrada; se adicionar, respeitar `prefers-reduced-motion`
- Barra de quatro cores (magenta, amarelo, roxo, ciano) é motivo de identidade — manter a ordem

## Acessibilidade (WCAG 2.1 AA — requisito de negócio, não checklist)
- Anel de foco visível global (`:focus-visible`). O protótipo usa `outline:none` — **não replicar**
- HTML semântico, h1 único, landmarks, skip link
- `alt` descritivo em imagem informativa, `alt=""` em decorativa
- `prefers-reduced-motion` respeitado
- Widget VLibras em todas as páginas
- Controle de fonte e alto contraste (brief; fica na barra de campanha)
- `aria-live` nas mensagens do formulário
- Lighthouse A11y ≥95

## Formulário de contato
Handoff proíbe `mailto:` e exige backend real. Implementado:
- Estados `idle | submitting | success | error` com `aria-live`
- Validação client + server (`src/app/api/contato/route.ts`)
- Honeypot anti-spam
- Consentimento LGPD explícito (checkbox obrigatório)
- Envio via Resend. **Sem `RESEND_API_KEY` a rota responde 503 com telefone e e-mail alternativos** — nunca finge sucesso

## SEO/Performance
- `metadata` por rota, OG, favicon
- `sitemap.xml`, `robots.txt`, JSON-LD `NGO`
- Lighthouse verde em Performance, A11y, Boas Práticas, SEO

## Regra dura
Dúvida de conteúdo ou dado real → parar e perguntar. Nunca inventar chave Pix, telefone, foto, logo de parceiro ou documento. Pendências ficam como placeholder explícito (ver `pendencias.md`).
