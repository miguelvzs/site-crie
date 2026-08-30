# Checklist de Acessibilidade

WCAG 2.1 AA. Requisito de negócio: a instituição atende pessoas com deficiência.

## Implementado
- [x] HTML semântico: `header nav main section footer address figure/figcaption blockquote`, landmarks
- [x] h1 único (hero), h2 por seção, h3 nos cards — ordem correta
- [x] Skip link ("Pular para o conteúdo"), visível no foco
- [x] **Anel de foco visível global** (`:focus-visible`, 3px ciano). O protótipo usa `outline:none`; deliberadamente não replicado
- [x] Navegação por teclado: menu colapsado com `aria-expanded`/`aria-controls`; nenhum elemento interativo sem foco
- [x] `scroll-margin-top: 132px` — âncoras não param sob o header sticky
- [x] Linha do tempo e lista de documentos como listas semânticas (`<ol>`/`<ul>`), não só posicionamento
- [x] Depoimentos e parceiros em grid fixo — sem carrossel, por decisão de a11y do handoff
- [x] `prefers-reduced-motion`: desliga transições e `scroll-behavior: smooth`
- [x] Widget VLibras em todas as páginas
- [x] Controle de fonte (4 níveis) e alto contraste, persistidos em `localStorage`
- [x] Formulário: `<label>` associado a todo campo, `required`, `minLength`, alvos ≥52px
- [x] `aria-live="polite"` nas mensagens de envio (sucesso e erro)
- [x] Consentimento LGPD explícito antes do envio
- [x] Honeypot em vez de captcha — não bloqueia usuário com deficiência
- [x] `alt` descritivo no logotipo; barra de cores e ícone do menu com `aria-hidden`
- [x] Contraste: paleta do handoff, escolhida para AA. Texto de leitura longa sempre em neutro sobre fundo sólido

## Pendente (precisa de navegador real)
- [ ] Lighthouse por rota (meta A11y ≥95) — não executado; extensão de browser indisponível nesta sessão
- [ ] Navegação 100% por teclado testada manualmente
- [ ] Contraste medido em tela (os valores vêm do handoff, não foram remedidos)
- [ ] VLibras testado end-to-end (depende de script externo em produção)
- [ ] `alt` das fotos reais quando entrarem — decorativas usam `alt=""`

## Como validar antes de publicar
1. `npm run build && npm run start`
2. Percorrer a página só com Tab/Shift+Tab/Enter/Esc, sem mouse
3. Lighthouse (DevTools) → aba Accessibility, em `/` e `/noticias`
4. Testar A-/A+/Contraste e o widget VLibras
5. Enviar o formulário com campos vazios e com dados válidos, conferindo se o leitor de tela anuncia o resultado
