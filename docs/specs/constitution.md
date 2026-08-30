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
- Paleta a partir da logo (azul institucional + acento quente) — pendente logo
- Tipografia grande/legível (público idoso, baixa visão)
- Placeholders marcados pra fotos reais
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
