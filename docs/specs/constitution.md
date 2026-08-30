# Constitution — Site institucional CRIE / APAE Extrema

Fonte: `brief_site_crie.md` (Miguel). Princípios fixos, mudança exige decisão explícita.

## Projeto
Site institucional/vitrine (sem login) pra CRIE — Centro de Integração Especial / APAE de Extrema (MG), ONG fundada 1991, atende pessoas com deficiência intelectual e famílias. Substitui WordPress abandonado (crieextrema.com.br, parado desde 2019).

Objetivos em ordem: 1) credibilidade/afeto institucional, 2) facilitar contato/apoio (doação, voluntariado), 3) acessibilidade exemplar.

Público: famílias (baixa renda, mobile-first), doadores, voluntários, parceiros, poder público.

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS
- Deploy Vercel, SSG — sem backend obrigatório na v1
- `next/image` todas imagens, `next/font` fontes
- Conteúdo em `/content` (JSON ou MDX), fora dos componentes — caminho de evolução pra CMS headless (Sanity/Contentful) futuro, **não implementar CMS agora**
- Componentização reutilizável: Header, Footer, Card, Section, Button etc.
- Git desde início, commits pequenos e descritivos

## Acessibilidade (WCAG 2.1 AA — critério de aceite por componente, não passada final)
- HTML semântico, headings em ordem, landmarks
- Navegação 100% teclado, foco visível, skip link
- Contraste AA todo texto e componente interativo
- `alt` descritivo em imagem informativa, `alt=""` em decorativa
- ARIA só onde necessário
- Respeita `prefers-reduced-motion`
- Widget **VLibras** (vlibras.gov.br) em todas páginas
- Controle aumentar/diminuir fonte e/ou alto contraste
- Lighthouse Acessibilidade ≥95, navegação só-teclado testada
- Checklist de acessibilidade documentado ao final

## SEO/Performance
- `metadata` por página (title, description, OG, favicon)
- `sitemap.xml`, `robots.txt`
- JSON-LD tipo `NGO`/`Organization`
- Lighthouse verde: Performance, A11y, Boas Práticas, SEO

## Design
- Tom acolhedor, humano, sério — sem infantilizar
- Logo real recebida: colorida/lúdica (magenta, amarelo, roxo, ciano, azul), não é logo mono-azul — ajusta expectativa do brief ("APAEs costumam usar azul")
- Paleta extraída da logo (contraste AA checado, texto branco sobre a cor):
  - `--color-brand-blue: #1663B3` — 6.05:1 ✅ AA texto normal → cor primária (CTA, links, header)
  - `--color-brand-purple: #6E2E8E` — 8.59:1 ✅ AA/AAA → CTA secundário, destaque
  - `--color-brand-pink: #E4007C` — 4.58:1 ⚠️ só texto grande/negrito (≥18px bold) ou usar shade mais escuro (`#C10069`) se precisar texto normal
  - `--color-brand-cyan: #00AEEF`, `--color-brand-yellow: #F5B711` — falham contraste com texto branco. Uso só decorativo (blobs, ícones, fundo de card) com texto escuro (`#1A1A1A`) por cima
  - Texto corpo/institucional: neutro escuro sobre branco (não sobre fundo colorido) — legibilidade > estética, público inclui baixa visão
- Aplicação: paleta vibrante em elementos decorativos/hero/ilustração (ecoa a logo), texto de leitura longa sempre neutro alto-contraste
- Tipografia grande/legível (público idoso, baixa visão)
- Placeholders marcados pra fotos reais (logo atual: `public/brand/logo-crie-original.jpg`, fundo branco não-transparente — pendente versão PNG/SVG transparente)
- CTAs evidentes: "Doe agora", "Fale conosco"

## Processo (spec-driven)
1. Plano por etapas + estrutura de pastas → aguarda ok Miguel antes de código
2. Scaffold (Next.js+TS+Tailwind), Header/Footer, design tokens, componentes base
3. Página por página, começando Home, mobile-first
4. A11y implementada por componente
5. Final: checklist a11y, instruções dev/build, passo a passo deploy Vercel

**Regra dura**: dúvida de conteúdo/dado → parar e perguntar. Nunca inventar dado real (telefone, endereço, texto institucional).

## Pendências bloqueantes
Ver `pendencias.md`.
