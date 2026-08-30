# Checklist de Acessibilidade — v1

WCAG 2.1 AA. Status implementado vs pendente.

## Implementado
- [x] HTML semântico: `<header> <nav> <main> <footer> <section> <address>`, landmarks
- [x] Skip link ("Pular para o conteúdo") funcional, visível no foco (`SkipLink.tsx`)
- [x] Heading order por página (h1 único, h2 por seção via `Section`)
- [x] Navegação por teclado: menu mobile com `aria-expanded`/`aria-controls`, foco visível em todos os interativos (`focus-visible:outline` brand-purple, contraste 8.59:1)
- [x] Contraste AA nos tokens de cor (ver `constitution.md` — valores calculados, não estimados)
- [x] `alt` descritivo na logo (nome da instituição); sem imagens decorativas ainda (fase de fotos reais pendente)
- [x] ARIA só onde necessário: menu mobile (`aria-expanded`, `aria-controls`), toolbar a11y (`role=group`, `aria-pressed`, `aria-label`)
- [x] `prefers-reduced-motion` respeitado globalmente (`globals.css`)
- [x] Widget VLibras embutido em todas as páginas (via `layout.tsx`)
- [x] Controle de aumentar/diminuir fonte (4 níveis, persistido) + alto contraste (toggle, persistido) — `A11yToolbar.tsx`
- [x] Timeline como lista semântica (`<ol>`), não só posicionamento visual
- [x] Formulário de contato: `<label>` associado a cada campo, `required`, `type=email`
- [x] Iframe do mapa com `title` descritivo

## Pendente (precisa ambiente de browser/Lighthouse real pra validar)
- [ ] Rodar Lighthouse em cada página (meta: A11y ≥95) — não executado nesta sessão (sem extensão de browser conectada)
- [ ] Navegação 100% por teclado testada manualmente em todas as páginas
- [ ] Validar contraste renderizado de fato (tokens calculados via fórmula WCAG, não medidos em tela)
- [ ] `alt` de fotos reais quando entrarem (instalações/equipe/atividades) — decorativas devem usar `alt=""`
- [ ] Testar VLibras end-to-end (depende de carregar script externo em produção)

## Como validar antes de publicar
1. `npm run build && npm run start`, abrir cada rota
2. Navegar só com Tab/Shift+Tab/Enter/Esc — sem mouse
3. Lighthouse (Chrome DevTools) em cada página, aba Accessibility
4. Testar toolbar A-/A+/Contraste e VLibras manualmente
