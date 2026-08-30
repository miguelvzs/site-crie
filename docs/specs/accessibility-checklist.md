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
- [x] Widget VLibras em todas as páginas — testado end-to-end em produção
- [x] Controle de fonte (4 níveis, com botão de reset) e alto contraste, persistidos em `localStorage`
- [x] **Tipografia toda em `rem`** — requisito para o A+/A- funcionar. Não reintroduzir `text-[NNpx]`
- [x] Preferências aplicadas antes do paint (`PREFS_SCRIPT` no `<head>`), sem piscar nem divergir na hidratação
- [x] Esc fecha o menu mobile e devolve o foco ao botão (WCAG 2.1.2)
- [x] Formulário: `<label>` associado a todo campo, `required`, `minLength`, alvos ≥52px
- [x] `aria-live="polite"` nas mensagens de envio (sucesso e erro)
- [x] Consentimento LGPD explícito antes do envio
- [x] Honeypot em vez de captcha — não bloqueia usuário com deficiência
- [x] `alt` descritivo no logotipo e nas três fotos; barra de cores e ícone do menu com `aria-hidden`
- [x] Contraste: paleta do handoff, escolhida para AA. Texto de leitura longa sempre em neutro sobre fundo sólido

## Pendente (precisa de navegador real)
- [ ] Lighthouse por rota (meta A11y ≥95) — não executado; extensão de browser indisponível nesta sessão
- [ ] Navegação 100% por teclado testada manualmente
- [ ] Contraste medido em tela (os valores vêm do handoff, não foram remedidos)
- [ ] Navegação por leitor de tela real (NVDA em português)

## Como validar antes de publicar
1. `npm run build && npm run start`
2. Percorrer a página só com Tab/Shift+Tab/Enter/Esc, sem mouse
3. Lighthouse (DevTools) → aba Accessibility, em `/` e `/noticias`
4. Testar A-/A+/Contraste e o widget VLibras
5. Enviar o formulário com campos vazios e com dados válidos, conferindo se o leitor de tela anuncia o resultado

## Próximos passos sugeridos
- `aria-invalid` + `aria-describedby` por campo no formulário (hoje só há `aria-live` no resultado geral)
- `@media (prefers-contrast: more)` ligando o alto contraste automaticamente
- Página `/acessibilidade` com declaração de conformidade e canal para relatar barreira (LBI 13.146/2015)
- `aria-current` no item de navegação ativo
- Reflow em zoom de 200% (WCAG 1.4.10) — conferir alturas fixas de `Foto` e header sticky

## Testes
```bash
node --experimental-strip-types src/components/a11y/a11y-prefs.test.mjs
node --experimental-strip-types src/lib/por-extenso.test.mjs
```
