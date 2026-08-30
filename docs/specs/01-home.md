# Spec — Página Home (`/`)

Status: draft, aguarda aprovação Miguel

## Objetivo
Primeiro contato. Visitante entende em <5s quem é CRIE/APAE Extrema, sente credibilidade/afeto, acha caminho pra ajudar ou contatar.

## Blocos (ordem)

### 1. Hero
- Frase-síntese (headline) + foto real (placeholder marcado até Miguel entregar)
- CTA primário "Doe agora" → `/doe`, CTA secundário "Conheça os projetos" → `/areas-de-atuacao`
- Conteúdo vem de `/content/home.json`, não hardcoded

### 2. Resumo Quem Somos
- Trecho curto da história (fundação 1991, ver `pendencias.md`) + link "Saiba mais" → `/quem-somos`

### 3. Cards 5 áreas de atuação
- Atendimento Educacional, Saúde, Assistência Social, Oficinas, Projetos Complementares
- Resumo curto cada (texto completo pendente, usar resumo do brief) + link pra âncora em `/areas-de-atuacao`

### 4. Bloco "Como ajudar"
- Doação (PIX — dado pendente) + voluntariado, CTA → `/doe`

### 5. Depoimentos
- Rotativo/carrossel respeitando `prefers-reduced-motion` (sem autoplay forçado se motion reduzido)
- Usar 4 depoimentos reais do brief (Terezinha, Maraisa, Sidneia, Gislaine), primeiro nome só

### 6. Últimas notícias
- 1-2 posts mais recentes de `/noticias`, card com título+data+resumo

### 7. Apoiadores
- Grid logos parceiros — placeholder até Miguel fornecer

### Footer (global, não só Home)
- Contato (endereço, telefone, e-mail — ver `pendencias.md`), redes sociais, CNPJ, link transparência

## Critério de aceite (Hero, aplicável já)
- [ ] Headline/subheadline vêm de arquivo de conteúdo, não hardcoded
- [ ] CTA primário visível sem scroll em mobile (375×667)
- [ ] Contraste texto sobre imagem ≥4.5:1
- [ ] Imagem hero via `next/image`, `priority` no LCP element
- [ ] CTAs com `aria-label`, foco visível teclado
- [ ] Sem CLS (dimensões reservadas)

## Critério de aceite (página toda)
- [ ] Heading order correto (h1 único, h2 por bloco)
- [ ] Landmarks semânticos (`header nav main section footer`)
- [ ] Skip link funcional
- [ ] Carrossel depoimentos navegável por teclado, pausável
- [ ] Lighthouse A11y ≥95

## Pendências
- Foto hero real + autorização de uso
- Texto completo 5 áreas (usar resumo do brief até chegar)
- Dados PIX/doação
- Logos apoiadores
