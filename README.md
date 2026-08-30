# Site institucional — CRIE / APAE Extrema

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, SSG, sem backend obrigatório na v1.

Contexto completo do projeto: `docs/specs/constitution.md`. Sitemap: `docs/specs/00-sitemap.md`. Pendências de conteúdo real (fotos, textos, PIX, domínio): `docs/specs/pendencias.md`.

## Dev

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Build / produção local

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Estrutura

- `content/` — conteúdo textual (JSON/MDX), fora dos componentes. Editar aqui não mexe em código
- `src/app/` — rotas (App Router)
- `src/components/ui/` — componentes base (Button, Card, Section, Timeline)
- `src/components/layout/` — Header, Footer, SkipLink, MobileNav
- `src/components/a11y/` — VLibras, toolbar fonte/contraste
- `docs/specs/` — specs por página/feature, spec-driven (ver constitution.md pro processo)

## Deploy na Vercel

1. Criar conta/projeto em [vercel.com](https://vercel.com) (ou `npm i -g vercel` pra usar a CLI)
2. Conectar o repositório Git (GitHub/GitLab/Bitbucket) — push deste repo pra um remoto primeiro
3. Vercel detecta Next.js automaticamente, sem configuração extra necessária
4. Variável de ambiente opcional: `NEXT_PUBLIC_SITE_URL` — setar quando o domínio definitivo for escolhido (ver `docs/specs/pendencias.md`). Sem ela, usa `https://crieextrema.com.br` como placeholder
5. Deploy automático a cada push; preview URL por PR

Nenhum deploy foi executado nesta sessão — repositório ainda é só local, sem remoto configurado.

## Pendências que bloqueiam publicação (não bloqueiam o build)

Ver checklist completo em `docs/specs/pendencias.md`. Resumo: logo em alta resolução/transparente, fotos reais, texto completo das áreas de atuação, dados de doação PIX, confirmação de contato, domínio definitivo.

## Acessibilidade

Checklist completo em `docs/specs/accessibility-checklist.md`.
