# Spec — Página Áreas de Atuação (`/areas-de-atuacao`)

Status: draft

## Objetivo
Detalhar as 5 áreas de atuação, cada uma com seção âncora navegável (usado por links da Home e menu).

## Conteúdo
`content/areas-de-atuacao.json` — array de `{ id, titulo, resumo, textoCompleto }`. `textoCompleto: null` até Miguel entregar (ver `pendencias.md`); renderiza resumo + aviso placeholder enquanto isso.

Ordem (igual Home, brief seção 4): Atendimento Educacional, Saúde, Assistência Social, Oficinas, Projetos Complementares.

## Critério de aceite
- [ ] Cada área é `<section>` com `id` âncora + heading próprio (h2), navegável via `#id` a partir da Home/menu
- [ ] Mesmo JSON usado pelos cards da Home (`areas-de-atuacao.json`) — sem duplicar array
- [ ] `textoCompleto` ausente → mostra resumo + placeholder explícito, não trava a build
- [ ] Heading order correto, Lighthouse A11y ≥95
