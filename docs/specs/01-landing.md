# Spec — Landing page (`/`)

Implementa `docs/handoff/README.md`. O handoff é a fonte de verdade; esta spec só registra decisões de implementação e desvios.

## Seções (ordem vertical)

| # | Componente | Âncora | Fundo |
|---|---|---|---|
| 0 | `TopBar` | — | magenta `#E5006E` |
| 1 | `Header` (sticky) | — | `warm-100` 93% + blur |
| 2 | `Hero` | — | `ink-900` |
| 3 | `Credenciais` | — | `ink-800` |
| 4 | `QuemSomos` | `#quem-somos` | `warm-100` |
| 5 | `Atuacao` | `#atuacao` | branco |
| 6 | `Historia` | `#historia` | `warm-100` |
| 7 | `Depoimentos` | — | roxo `#8A21CE` |
| 8 | `Ajudar` | `#ajudar` | `warm-100` |
| 9 | `Transparencia` | `#transparencia` | branco |
| 10 | `Parceiros` | `#parceiros` | `warm-100` |
| 11 | `Contato` | `#contato` | `ink-900` |
| 12 | `Footer` | — | `ink-800` |

Conteúdo inteiro em `content/landing.json`. Copy é final — não reescrever sem aprovação.

## Decisões de implementação (o handoff deixou em aberto)

- **Responsivo** não foi desenhado. Seguida a recomendação do handoff: `lg` (≥1024px) mantém o layout do protótipo; abaixo disso os grids caem para 2 e depois 1 coluna; nav colapsa em menu com o botão "Doar agora" sempre visível fora dele; H1 escala 66 → 52 → 40px.
- **Grid de áreas de atuação**: `span 2 / span 3` só valem em `lg`. Abaixo, 2 colunas e depois 1 — o span inline vazaria nos breakpoints menores.
- **"Trinta e cinco anos"** é derivado de `new Date().getFullYear() - 1991` via `src/lib/por-extenso.ts`, como o handoff exige. Check em `src/lib/por-extenso.test.mjs` (`node --experimental-strip-types`).
- **Toolbar A-/A+/Contraste** (pedida pelo brief, ausente no handoff) mora na barra de campanha — faixa utilitária, não interfere no header desenhado.
- **Placeholders somem sozinhos**: assim que `logoUrl`, `url` do PDF, `chavePix` ou `horarioAtendimento` deixam de ser `null` no JSON, a nota provisória desaparece e o dado real aparece. Nenhuma edição de componente necessária.
- **Estados vazios** que o protótipo não desenhou: transparência sem documentos mostra "em breve" no lugar do rótulo "PDF" e uma nota; parceiros sem logo mostram a placa tipográfica.

## Formulário

Handoff proíbe `mailto:`. Implementado com estado controlado, `aria-live`, honeypot, consentimento LGPD e envio via Resend em `/api/contato`. Sem `RESEND_API_KEY` a rota responde 503 informando telefone e e-mail — nunca finge que enviou.

## Critério de aceite

- [x] Copy idêntica ao handoff, pt-BR com acentuação preservada
- [x] Tokens de cor/tipografia/espaçamento conforme `docs/handoff/README.md`
- [x] h1 único, headings em ordem, landmarks, skip link
- [x] Anel de foco visível (o `outline:none` do protótipo não foi replicado)
- [x] Sem carrossel, sem sombra, sem ícone decorativo
- [x] `scroll-margin-top` compensa o header sticky
- [x] Placeholders explícitos onde falta dado real
- [ ] Lighthouse A11y ≥95 medido em navegador (ver `accessibility-checklist.md`)
- [ ] Navegação só-teclado testada manualmente
