# Site institucional — CRIE / APAE Extrema

Landing page única do CRIE — Centro de Integração Especial, Extrema/MG. Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, implementando o handoff de design em `docs/handoff/`.

- Produção: https://site-crie.vercel.app
- Handoff de design (fonte de verdade): `docs/handoff/README.md`
- Decisões e processo: `docs/specs/constitution.md`
- Pendências de conteúdo real: `docs/specs/pendencias.md`

## Dev

```bash
npm install
npm run dev
```

## Build / produção local

```bash
npm run build
npm run start
```

## Lint e checks

```bash
npm run lint
node --experimental-strip-types src/lib/por-extenso.test.mjs
```

## Estrutura

- `content/landing.json` — todo o conteúdo da landing. Editar aqui não mexe em componente
- `content/noticias/*.mdx` — posts do blog
- `src/components/sections/` — uma seção da landing por arquivo, na ordem vertical da página
- `src/components/ui/primitives.tsx` — `Container`, `Eyebrow`, `ImagePlaceholder`
- `src/components/a11y/` — VLibras, controle de fonte e contraste
- `src/app/api/contato/` — envio do formulário
- `docs/handoff/` — pacote de design original (referência, não é código do projeto)

## Variáveis de ambiente

| Variável | Para quê | Sem ela |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canônica em metadata/sitemap | usa `https://crieextrema.com.br` |
| `RESEND_API_KEY` | envio do formulário de contato | rota responde 503 informando telefone e e-mail |
| `CONTATO_EMAIL_DESTINO` | caixa que recebe as mensagens | usa o e-mail institucional |
| `CONTATO_EMAIL_REMETENTE` | remetente verificado no Resend | usa `site@crieextrema.com.br` |

Setar em Vercel → Project → Settings → Environment Variables.

## Deploy

Repositório conectado à Vercel: todo push em `master` gera deploy de produção; PRs geram preview.

## Acessibilidade

Checklist em `docs/specs/accessibility-checklist.md`. Itens que exigem navegador real (Lighthouse, teclado, VLibras) ainda não foram medidos.
