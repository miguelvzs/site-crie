# Site institucional — CRIE / APAE Extrema

Site do CRIE — Centro de Integração Especial, ONG de Extrema/MG que atende gratuitamente pessoas com deficiência e suas famílias desde 1991. Substitui um WordPress abandonado em 2019.

Landing page única com âncoras internas, mais uma rota de notícias em MDX. Next.js 16 (App Router), TypeScript, Tailwind CSS v4. Deploy na Vercel.

| | |
|---|---|
| Produção | https://crieextrema.vercel.app |
| Repositório | https://github.com/miguelvzs/site-crie |
| Branch de produção | `master` |

## Sumário

- [Como rodar](#como-rodar)
- [Arquitetura](#arquitetura)
- [Estrutura de diretórios](#estrutura-de-diretórios)
- [Editando conteúdo](#editando-conteúdo)
- [Design system](#design-system)
- [Acessibilidade](#acessibilidade)
- [Formulário de contato](#formulário-de-contato)
- [SEO](#seo)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Testes e checks](#testes-e-checks)
- [Deploy](#deploy)
- [Convenções](#convenções)
- [Pendências](#pendências)

## Como rodar

Node 20.9+ (exigência do Next 16).

```bash
npm install
npm run dev          # http://localhost:3000
```

Build e execução local do bundle de produção:

```bash
npm run build
npm run start
```

## Arquitetura

**Landing única, não seis rotas.** Decisão do handoff de design: o conteúdo institucional cabe em uma página e a navegação vira âncora (`#quem-somos`, `#atuacao`, `#historia`, `#ajudar`, `#parceiros`, `#contato`). Menos cliques entre o visitante e o pedido de apoio.

**Conteúdo fora dos componentes.** Todo o texto da landing vive em `content/landing.json`. Editar copy não exige tocar em React. Os componentes de seção consomem esse JSON e não têm string de conteúdo hardcoded.

**Estático por padrão.** A landing e `/noticias` são pré-renderizadas em build. `POST /api/contato` é a única rota dinâmica.

| Rota | Renderização | Origem |
|---|---|---|
| `/` | Estática | `content/landing.json` |
| `/noticias` | Estática | `content/noticias/*.mdx` |
| `/noticias/[slug]` | SSG via `generateStaticParams` | idem |
| `/api/contato` | Dinâmica (Node) | — |
| `/sitemap.xml`, `/robots.txt` | Estática | `src/app/sitemap.ts`, `robots.ts` |

**Uma seção por arquivo.** `src/components/sections/` tem um componente por faixa da página, nomeado como a seção e listado em `src/app/page.tsx` na mesma ordem vertical em que aparece. Para achar o código de um trecho da página, conte as seções de cima para baixo.

## Estrutura de diretórios

```
content/
  landing.json              Todo o conteúdo da landing
  noticias/*.mdx            Posts, com export `meta`
src/
  app/
    page.tsx                Monta as seções na ordem da página
    layout.tsx              Fontes, metadata, script de pré-hidratação de a11y
    api/contato/route.ts    Validação + envio via Resend
    noticias/               Índice e post
    sitemap.ts robots.ts    Gerados a partir de SITE_URL e dos posts
  components/
    sections/               Uma seção da landing por arquivo
    a11y/                   VLibras, controle de fonte e contraste
    ui/primitives.tsx       Container, Eyebrow, Foto
    layout/SkipLink.tsx
    seo/OrganizationJsonLd.tsx
  lib/
    posts.ts                Leitura dos MDX
    site-url.ts             URL canônica
    por-extenso.ts          Número por extenso (título da História)
docs/
  handoff/                  Pacote de design original — referência, não é código
  specs/                    Constitution, checklist de a11y, pendências
public/
  brand/  fotos/
```

## Editando conteúdo

Texto, ordem de itens e dados institucionais saem de `content/landing.json`. Não é preciso build local para revisar copy: um push gera preview na Vercel.

Chaves que controlam renderização:

| Chave | Efeito |
|---|---|
| `topBar.mostrar`, `depoimentos.mostrar`, `transparencia.mostrar`, `parceiros.mostrar` | `false` remove a seção inteira do DOM |
| `contato.horarioAtendimento` | `null` esconde a linha; preencher faz aparecer |
| `ajudar.chavePix` | `null` enquanto a chave oficial não vem |
| `transparencia.documentos[].url` | Sem `url`, o item renderiza "em breve" em vez de link |
| `parceiros.itens[].logoUrl` | Sem `logoUrl`, cai para o nome em placa tipográfica |
| `*.imagem` | `{ src, alt, nota }` — `alt` descritivo é obrigatório |

Posts de notícias são `.mdx` com `export const meta = { title, date, excerpt }`. O slug é o nome do arquivo. Nada a registrar: `getPostSlugs()` lê o diretório e o sitemap se atualiza sozinho.

## Design system

Os tokens ficam em `src/app/globals.css`, espelhando `docs/handoff/README.md`. Valores exatos — não improvisar.

- **Sem sombra.** Separação por cor de fundo e borda de 1px
- **Cantos vivos.** `border-radius: 2px` apenas em botões e campos
- **Sem ícone decorativo** e **sem carrossel** — grid fixo em depoimentos e parceiros, decisão de acessibilidade (carrossel esconde conteúdo)
- **Barra de quatro cores** (magenta, amarelo, roxo, ciano) é motivo de identidade: manter a ordem
- Tailwind v4 com tokens em `@theme`, sem `tailwind.config.js`
- Fontes via `next/font` (Bricolage Grotesque, Archivo, IBM Plex Mono), self-hosted — nenhuma requisição ao Google Fonts em runtime

### Regra dura: tipografia em `rem`

O controle A+/A- ajusta o `font-size` da raiz, e isso só escala `rem`/`em`. Uma classe `text-[19px]` fica congelada e o recurso de acessibilidade morre em silêncio.

```
✗ text-[19px]        ✓ text-[1.1875rem]      (px ÷ 16)
```

Vale para tamanho de fonte. Espaçamento, altura e borda continuam em px.

## Acessibilidade

WCAG 2.1 AA é requisito de negócio: a instituição atende pessoas com deficiência. Checklist completo em `docs/specs/accessibility-checklist.md`.

Implementado: HTML semântico com landmarks e `h1` único, skip link, anel de foco visível global (`:focus-visible` — o protótipo usa `outline:none`, deliberadamente não replicado), `prefers-reduced-motion`, widget VLibras em todas as páginas, `aria-live` no formulário, `alt` descritivo, alvos de toque ≥52px.

**Controle de fonte e contraste.** Quatro níveis de fonte e alto contraste, persistidos em `localStorage`. `PREFS_SCRIPT` (em `src/components/a11y/a11y-prefs.ts`) roda inline no `<head>` e aplica a preferência salva antes do primeiro paint — sem piscada. A `A11yToolbar` lê esse estado com `useSyncExternalStore`, cujo snapshot de servidor bate com o HTML renderizado, então não há divergência de hidratação.

Ao mexer nesse par, mantenha os degraus do script inline e os do módulo em sincronia — há uma asserção em `a11y-prefs.test.mjs` justamente para isso.

## Formulário de contato

`mailto:` foi vetado pelo handoff. `POST /api/contato` valida no cliente e no servidor (`validar()` é exportada e testável), usa honeypot em vez de captcha (captcha barra justamente o público do site) e exige consentimento LGPD explícito.

| Situação | Resposta |
|---|---|
| Honeypot preenchido | `200 { ok: true }`, nada enviado — não ensina o bot |
| Validação falhou | `400 { erro }` |
| `RESEND_API_KEY` ausente | `503` com telefone e e-mail no corpo do erro |
| Resend falhou | `502` |
| Sucesso | `200 { ok: true }` |

Sem chave configurada a rota **nunca finge sucesso**: devolve 503 e oferece os canais alternativos.

## SEO

`metadata` por rota com template de título, Open Graph, `sitemap.xml` e `robots.txt` gerados, e JSON-LD do tipo `NGO`. Todas as URLs derivam de `SITE_URL` (`src/lib/site-url.ts`).

## Variáveis de ambiente

Nenhuma é obrigatória para o build — cada ausência tem fallback explícito.

| Variável | Para quê | Sem ela |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canônica em metadata e sitemap | Usa `https://crieextrema.com.br` |
| `RESEND_API_KEY` | Envio do formulário | Rota responde 503 com telefone e e-mail |
| `CONTATO_EMAIL_DESTINO` | Caixa que recebe as mensagens | Usa o e-mail institucional do JSON |
| `CONTATO_EMAIL_REMETENTE` | Remetente verificado no Resend | Usa `site@crieextrema.com.br` |

Configurar em Vercel → Project → Settings → Environment Variables. Localmente, `vercel env pull` traz para `.env.local`.

## Testes e checks

```bash
npm run lint
npx tsc --noEmit
node --experimental-strip-types src/components/a11y/a11y-prefs.test.mjs
node --experimental-strip-types src/lib/por-extenso.test.mjs
```

Sem framework de teste: `node:assert` e execução direta. Cobre o que quebra em silêncio — clamp e persistência das preferências de a11y, número por extenso. Lógica trivial não tem teste, e isso é intencional.

Antes de publicar mudança visual, o checklist manual está em `docs/specs/accessibility-checklist.md`: percorrer a página só com teclado, rodar Lighthouse em `/` e `/noticias`, testar A-/A+/Contraste e o VLibras, enviar o formulário vazio e preenchido.

## Deploy

Repositório conectado à Vercel. Push em `master` gera deploy de produção; PR gera preview. O build leva menos de 30s.

```bash
vercel ls                                   # deployments recentes e status
vercel inspect <url>                        # aliases, builds, região
vercel deploy --prod                        # forçar, se precisar
```

O alias de produção é `crieextrema.vercel.app`. Ao trocar o domínio, atualize também `NEXT_PUBLIC_SITE_URL` — senão sitemap, OG e JSON-LD continuam apontando para o antigo.

## Convenções

- **Nada de dado inventado.** Chave Pix, telefone, foto, logotipo de parceiro, documento: na dúvida, pergunte à instituição. Pendência vira campo `null` com fallback visível, nunca um valor plausível chutado
- **Nada de recado interno na página.** Nota de produção ("enviar os logotipos", "publicar os PDFs") vive em `docs/specs/pendencias.md`, não no DOM
- Commits pequenos, mensagem em imperativo com prefixo `feat:` / `fix:` / `content:` / `docs:` / `refactor:`
- O handoff (`docs/handoff/README.md`) é fonte de verdade para layout, tokens e comportamento. Onde ele diverge do brief, ele vence. `docs/specs/constitution.md` registra as decisões

## Pendências

`docs/specs/pendencias.md` lista o que falta para publicar. Nada disso quebra build ou deploy — cada item renderiza um fallback.

Os maiores: **fluxo de doação real** (hoje "Quero doar" apenas rola até o formulário; o handoff aponta isso como a maior lacuna do produto), PDFs de transparência, 15 logotipos de parceiros, chave Pix e definição do domínio.
