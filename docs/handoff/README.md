# Handoff: Site institucional CRIE — Landing page

## Overview

Landing page institucional do **CRIE — Centro de Integração Especial**, associação sem fins lucrativos de Extrema/MG, fundada em 1991, filiada à Federação das APAEs. A página tem três objetivos, nesta ordem de prioridade:

1. **Captar apoio** — doação recorrente, voluntariado e parceria com empresas.
2. **Explicar o atendimento** — cinco áreas de atuação, para famílias que buscam a instituição.
3. **Dar credibilidade** — história, títulos de utilidade pública, transparência documental, depoimentos e parceiros.

Idioma: **português do Brasil**. Público: famílias de pessoas com deficiência, voluntários e empresas da região (o parque industrial de Extrema é vizinho e é um alvo explícito de captação).

## About the Design Files

Os arquivos em `design/` são **referências de design escritas em HTML** — protótipos que mostram aparência e comportamento pretendidos. **Não são código de produção para copiar.** A tarefa é **recriar estes designs no ambiente do codebase de destino** (React, Vue, Astro, WordPress, SwiftUI, etc.), usando os padrões, componentes e bibliotecas já estabelecidos nele. Se ainda não existe codebase, escolha o framework mais adequado — para um site institucional com conteúdo majoritariamente estático, um gerador estático (Astro, Next.js estático, Eleventy) com CMS leve é a escolha natural.

Observações sobre o formato do arquivo:

- `design/Site CRIE - Landing.dc.html` é um **Design Component**: o markup fica dentro de `<x-dc>`, a lógica numa classe `Component extends DCLogic`, e `design/support.js` é o runtime que renderiza isso. Abra o HTML direto no navegador para ver o design.
- Toda a estilização está **inline**, por exigência do ambiente de autoria. **Não replique isso em produção** — converta para o sistema de estilos do codebase (CSS modules, Tailwind, styled-components, etc.). Os valores exatos estão documentados em *Design Tokens*.
- Tags `<sc-if value="{{ flag }}">` são condicionais do runtime; em produção correspondem a um simples render condicional (ou a um toggle no CMS).

## Fidelity

**Alta fidelidade (hifi).** Cores, tipografia, escala de espaçamento, hierarquia e copy estão finais e devem ser reproduzidos com precisão. Duas ressalvas:

- **Layout responsivo não foi desenhado.** O protótipo é desktop-first (contêiner de 1240px). Breakpoints são decisão de implementação — há orientação em *Responsive behavior*.
- **Imagens são placeholders.** Todos os blocos com hachura diagonal e legenda em monoespaçada são vazios a preencher com fotos reais.

## Screens / Views

Uma única página, com âncoras internas. Ordem vertical das seções:

### 0. Barra de campanha (`showTopBar`)

- **Purpose**: chamada de captação sempre visível no topo, acima da navegação.
- **Layout**: `flex`, `align-items:center`, `justify-content:center`, `gap:20px`, `flex-wrap:wrap`, `padding:12px 32px`. Largura total.
- **Fundo**: `#E5006E` (magenta). Texto `#FFFFFF`.
- **Componentes**:
  - Eyebrow: "Faça parte" — IBM Plex Mono 500, 12px, `letter-spacing:.14em`, `text-transform:uppercase`.
  - Frase: "Sua contribuição sustenta o atendimento gratuito de mais de 100 famílias em Extrema." — Archivo 400, 15px. **⚠ o número de famílias precisa ser confirmado pela direção antes de publicar.**
  - Link "Quero apoiar" → `#ajudar` — Archivo 600, 15px, `border-bottom:2px solid rgba(255,255,255,.5)`; hover: borda `#FFFFFF` sólida.
- **Comportamento**: seção inteira ocultável por flag.

### 1. Header / navegação

- **Purpose**: navegação e CTA primário de doação.
- **Layout**: `position:sticky; top:0; z-index:50`. Fundo `rgba(246,245,242,.93)` + `backdrop-filter:blur(12px)`; `border-bottom:1px solid #E2DFD8`. Conteúdo em `flex`, `align-items:center`, `gap:40px`, `max-width:1240px`, `margin:0 auto`, `padding:16px 32px`.
- **Componentes**:
  - **Lockup da marca** (`flex`, `gap:16px`, link para `#`): logotipo oficial `assets/crie-logo-oficial.png` em 118×55px, `object-fit:contain`; ao lado, bloco com `padding-left:16px` e `border-left:1px solid #DCD8D0` contendo "Centro de Integração / Especial" (Archivo 600, 13.5px, `line-height:1.25`, `#3A3D44`) e "EXTREMA · MG" (Plex Mono 500, 10px, `letter-spacing:.1em`, `#8A867E`).
  - **Nav** (`margin-left:auto`, `flex`, `gap:30px`, `flex-wrap:wrap`): Quem somos → `#quem-somos`; Áreas de atuação → `#atuacao`; História → `#historia`; Como ajudar → `#ajudar`; Contato → `#contato`. Archivo 500, 16px, `#3A3D44`; hover `#E5006E`.
  - **CTA "Doar agora"** → `#ajudar`: Archivo 600, 16px, texto `#FFFFFF`, fundo `#16181C`, `padding:13px 24px`, `border-radius:2px`; hover fundo `#E5006E`.
- **⚠ Acessibilidade**: o logotipo oficial é uma imagem raster de 150×70 com transparência. Forneça `alt="CRIE — Centro de Integração Especial"` e, se possível, obtenha um **SVG** da marca — em telas de alta densidade o PNG fica macio.

### 2. Hero

- **Purpose**: posicionar a instituição em uma frase e oferecer os dois caminhos (apoiar / conhecer).
- **Layout**: fundo `#0E1013`, texto `#F6F5F2`. Grid `1.1fr .9fr`, `gap:64px`, `align-items:center`, `max-width:1240px`, `padding:104px 32px 112px`.
- **Coluna esquerda**:
  - **Barra de quatro cores** (motivo recorrente da identidade): quatro blocos de 44×7px, `gap:5px`, nas cores `#E5006E`, `#F2B300`, `#8A21CE`, `#12A9E0`. `margin-bottom:32px`.
  - **H1**: "Desenvolver potencialidades, garantir direitos." — Bricolage Grotesque 800, 66px, `line-height:1.02`, `letter-spacing:-.03em`, `text-wrap:pretty`.
  - **Parágrafo**: Archivo 400, 21px, `line-height:1.5`, `#B9B5AC`, `max-width:620px`. Texto: "O CRIE atende gratuitamente pessoas com deficiência e suas famílias em Extrema, no sul de Minas Gerais. Fundado em 1991 por um grupo de cidadãos solidários, é filiado à Federação das APAEs e reconhecido como entidade de utilidade pública federal."
  - **Botões** (`flex`, `gap:14px`, `margin-top:40px`): primário "Quero ajudar o CRIE" → `#ajudar` (fundo `#F2B300`, texto `#16181C`, Archivo 600 17px, `padding:17px 32px`, `radius:2px`, hover fundo `#FFFFFF`); secundário "Conhecer os atendimentos" → `#atuacao` (`border:2px solid #3A3D44`, texto `#F6F5F2`, hover borda `#F6F5F2`).
- **Coluna direita**: placeholder de imagem, altura 440px, fundo `#1A1D22` com hachura `repeating-linear-gradient(135deg, rgba(246,245,242,.055) 0 12px, transparent 12px 24px)`; legenda inferior centralizada "FOTO — ATENDIMENTO OU OFICINA, HORIZONTAL" (Plex Mono 500, 12.5px, `#8C8880`). Abaixo, nota "Substituir por imagem real, com autorização de uso de imagem." (Plex Mono 500, 11.5px, `#6E6A63`).

### 3. Faixa de credenciais

- **Layout**: fundo `#16181C`, `border-top:1px solid #2A2D33`; `flex`, `flex-wrap:wrap`, `gap:16px 52px`, `align-items:center`, `padding:26px 32px`.
- **Itens**: "DESDE 1991" (Plex Mono 500, 13px, `letter-spacing:.12em`, `#F2B300`, uppercase); depois três itens em Archivo 400 16px `#B9B5AC`: "Filiado à Federação das APAEs de Minas Gerais", "Utilidade pública federal e estadual", "Certificado de Entidade Beneficente".

### 4. Quem somos (`#quem-somos`)

- **Layout**: fundo `#F6F5F2`. Grid `1fr 1fr`, `gap:64px`, `align-items:start`, `padding:100px 32px 88px`.
- **Esquerda**: eyebrow "QUEM SOMOS" (Plex Mono 500, 13px, `letter-spacing:.16em`, `#8A21CE`) + H2 "Uma instituição que a própria cidade criou" (Bricolage 800, 44px, `line-height:1.05`, `letter-spacing:-.025em`).
- **Direita**: três parágrafos Archivo 400, 19px, `line-height:1.6`, `#3A3D44`, `gap:18px`, `padding-top:8px`. Conteúdo: (a) fundação em 1991 diante da falta de atendimento especializado na cidade; (b) o propósito — desenvolver potencialidades, apoiar a família, defender inclusão na escola, no trabalho e na cidade; (c) atendimento gratuito, equipe multidisciplinar, sustentado por convênios públicos, doações e apoio de empresas.

### 5. Áreas de atuação (`#atuacao`)

- **Layout**: fundo `#FFFFFF`, `border-top:1px solid #E2DFD8`, `padding:100px 32px`.
- **Cabeçalho**: eyebrow "ÁREAS DE ATUAÇÃO" (`#E5006E`); H2 "Cinco frentes, uma equipe só" (Bricolage 800, 44px, `max-width:820px`); parágrafo de apoio Archivo 19px `#5A5D64` `max-width:720px` — "O acompanhamento é discutido em conjunto: o que acontece numa área é levado às outras nas reuniões semanais de equipe."
- **Grid de cards**: `grid-template-columns:repeat(6,1fr)`, `gap:24px`, `margin-top:56px`. Os três primeiros cards ocupam `span 2` (linha de 3); os dois últimos `span 3` (linha de 2).
- **Anatomia do card**: fundo `#F6F5F2`, `border-top:7px solid <cor>`, `padding:34px 30px 38px`, `flex-direction:column`, `gap:14px`. Numeral (Plex Mono 500, 12px, `letter-spacing:.12em`, `#8A867E`), H3 (Bricolage 800, 27px, `line-height:1.1`, `letter-spacing:-.02em`), corpo (Archivo 400, 16.5px, `line-height:1.55`, `#5A5D64`).
- **Conteúdo dos cards**:

  | # | Cor da borda | Título | Corpo |
  |---|---|---|---|
  | 01 | `#E5006E` | Atendimento educacional especializado | Serviço autorizado como CAEE, com plano pedagógico individual e apoio à escolarização na rede regular. |
  | 02 | `#F2B300` | Saúde | Atendimento clínico e terapêutico por equipe multidisciplinar, com encaminhamentos à rede pública quando necessário. |
  | 03 | `#8A21CE` | Assistência social | Acolhimento das famílias, orientação sobre direitos e benefícios e articulação com os serviços do município. |
  | 04 | `#12A9E0` | Oficinas | Atividades práticas e produtivas voltadas a jovens e adultos, com foco em autonomia, convivência e preparação para o trabalho. |
  | 05 | `#2E9E63` | Projetos complementares | Programas de formação e apoio às famílias, entre eles a Escola de Pais, da UNIAPAE-MG. |

### 6. História (`#historia`)

- **Layout**: fundo `#F6F5F2`, `border-top:1px solid #E2DFD8`. Grid `.8fr 1.2fr`, `gap:64px`, `align-items:start`, `padding:100px 32px`.
- **Esquerda**: eyebrow "HISTÓRIA" (`#12A9E0`); H2 "Trinta e cinco anos de reconhecimento" (Bricolage 800, 44px); placeholder de foto da fachada com 300px de altura, fundo `#EFEDE7`, hachura `rgba(22,24,28,.06)`, legenda "FOTO — FACHADA DA SEDE" e nota "Rua Véu da Noiva, 62 — Extrema/MG."
- **Direita — linha do tempo**: seis linhas em grid `104px 1fr`, `gap:28px`, `padding:24px 0`. Primeira linha `border-top:2px solid #16181C`; intermediárias `border-top:1px solid #DCD8D0`; última também `border-bottom:2px solid #16181C`. Ano em Bricolage 800, 26px, `letter-spacing:-.02em`, cor rotativa; descrição em Archivo 400, 17.5px, `line-height:1.5`, `#3A3D44`.

  | Ano | Cor | Marco |
  |---|---|---|
  | 1991 | `#E5006E` | Fundação do CRIE por um grupo de cidadãos solidários, diante da falta de atendimento especializado na cidade. |
  | 2005 | `#F2B300` | Filiação à Federação das APAEs, integrando o movimento apaeano de Minas Gerais. |
  | 2006 | `#8A21CE` | Reconhecimento como entidade de utilidade pública estadual e inscrição no conselho nacional de assistência social. |
  | 2007 | `#12A9E0` | Título de Cidadão Honorário Extremense concedido à presidência e à direção da instituição. |
  | 2010 | `#2E9E63` | Reconhecimento como entidade de utilidade pública federal. |
  | 2016 | `#E5006E` | Autorização para funcionar como Centro de Atendimento Educacional Especializado e Certificado de Entidade Beneficente de Assistência Social. |

- **⚠** "Trinta e cinco anos" é calculado a partir de 1991. Se o site for publicado em outro ano, o número precisa mudar — considere derivá-lo da data corrente em vez de deixá-lo fixo no texto.

### 7. Depoimentos (`showDepoimento`)

- **Layout**: fundo `#8A21CE`, texto `#FFFFFF`, `padding:96px 32px`. Eyebrow "DEPOIMENTOS" (`#E7CBFA`); H2 "Quem convive com o CRIE" (Bricolage 800, 40px, `margin:18px 0 40px`, `max-width:760px`). Grid `repeat(3,1fr)`, `gap:28px`, `align-items:start`.
- **Anatomia do card**: `<figure>` com fundo `rgba(255,255,255,.12)`, `padding:34px 32px`, `flex-direction:column`, `gap:24px`. Citação em Bricolage 600, 22px, `line-height:1.32`, `letter-spacing:-.01em`, entre aspas tipográficas curvas. `<figcaption>` com `margin-top:auto`, `padding-top:20px`, `border-top:1px solid rgba(255,255,255,.28)`: nome em Plex Mono 500, 12px, `letter-spacing:.12em`, uppercase, `#FFFFFF`; relação em Archivo 400, 15.5px, `#E7CBFA`.
- **Conteúdo** (depoimentos reais fornecidos pela instituição):
  1. "O CRIE é o lugar onde meu filho e outras crianças são cuidadas com muito amor e dedicação. Lugar abençoado!" — **Terezinha**
  2. "O CRIE/APAE — para nós significa amor e esperança. A dedicação e o carinho fazem toda diferença no trabalho realizado… Anjos em forma de gente." — **Maraisa**, Miguel Pedroso
  3. "A Darly ama ir ao CRIE/APAE, nossa segunda família. Amor, dedicação, esforço, são muitos adjetivos. Deus abençoe a todos pelo esforço e dedicação com nossos filhos." — **Sidneia**, mãe de Darly
- **Nota de implementação**: no site atual esses depoimentos estão num carrossel. Aqui foram fixados em grid de três, deliberadamente — carrossel esconde conteúdo e prejudica acessibilidade. Se houver mais depoimentos do que caibam, prefira paginação ou "ver mais" a autoplay.

### 8. Como ajudar (`#ajudar`)

- **Layout**: fundo `#F6F5F2`, `padding:100px 32px`. Eyebrow "COMO AJUDAR" (`#2E9E63`); H2 "O atendimento é gratuito — mas não é de graça" (Bricolage 800, 44px, `max-width:820px`); parágrafo Archivo 19px `#5A5D64` — "Cada contribuição vira hora de terapia, material de oficina e transporte de quem mora longe."
- **Grid**: `repeat(3,1fr)`, `gap:24px`, `margin-top:56px`, `align-items:stretch`. Cada card `flex-direction:column`, `gap:16px`, `padding:40px 34px`; CTA com `margin-top:auto` para alinhar a base dos três.
  - **Card 1 — DOAÇÃO** (destacado): fundo `#16181C`, texto `#F6F5F2`. Kicker `#F2B300`. H3 "Doe uma vez ou todo mês" (Bricolage 800, 29px). Corpo `#B9B5AC` 16.5px. Bloco Pix: `border-top:1px solid #2A2D33`, `padding-top:20px`, label "CHAVE PIX" (Plex Mono, `#8C8880`) e valor **`[inserir chave Pix oficial]`** — pendente. CTA "Quero doar" → `#contato`, fundo `#F2B300`, texto `#16181C`, hover `#FFFFFF`.
  - **Card 2 — VOLUNTARIADO**: fundo `#FFFFFF`, `border:1px solid #E2DFD8`. Kicker `#8A21CE`. H3 "Doe tempo e conhecimento". Corpo `#5A5D64`. CTA "Ser voluntário" → `#contato`, outline `2px solid #16181C`, hover fundo `#16181C` texto `#FFFFFF`.
  - **Card 3 — EMPRESAS**: mesmo estilo do card 2, kicker `#12A9E0`. H3 "Parceria institucional". CTA "Falar com a direção".
- **⚠ Prioridade de produto**: hoje os três CTAs apenas rolam para o formulário. Na implementação real, "Quero doar" deveria abrir um fluxo de doação de verdade (Pix com QR code copiável, e/ou gateway com cartão recorrente). É a maior lacuna funcional do protótipo.

### 9. Transparência (`showTransparencia`)

- **Layout**: fundo `#FFFFFF`, `border-top:1px solid #E2DFD8`. Grid `.9fr 1.1fr`, `gap:64px`, `padding:96px 32px`.
- **Esquerda**: eyebrow "TRANSPARÊNCIA" (`#F2B300`); H2 "Quem doa tem direito de ver" (Bricolage 800, 40px); parágrafo Archivo 18px `#5A5D64`.
- **Direita**: lista de quatro links, cada um `flex`, `justify-content:space-between`, `padding:22px 0`, primeiro com `border-top:2px solid #E2DFD8`, demais `1px`, último com `border-bottom:2px`. Título em Archivo 600, 19px, `#16181C`, hover `#E5006E`; à direita rótulo "PDF" (Plex Mono 500, 12px, `#8A867E`). Itens: Relatório anual de atividades; Demonstrativo financeiro; Estatuto social; Certidões, títulos e registros. **Todos os `href` são `#` — pendente de arquivos reais.**

### 10. Parceiros (`showParceiros`, `#parceiros`)

- **Layout**: fundo `#F6F5F2`, `border-top:1px solid #E2DFD8`, `padding:96px 32px`.
- **Cabeçalho**: `flex`, `flex-wrap:wrap`, `justify-content:space-between`, `align-items:flex-end`, `gap:24px`. Eyebrow "CONHEÇA NOSSOS PARCEIROS" (`#12A9E0`) + H2 "Quem sustenta o atendimento junto com a gente" (Bricolage 800, 40px, `max-width:640px`). À direita, CTA outline "Sua empresa aqui" → `#ajudar`.
- **Grid**: `repeat(5,1fr)`, `gap:16px`, `margin-top:48px`. Cada célula: `min-height:96px`, `padding:18px 16px`, fundo `#FFFFFF`, `border:1px solid #E2DFD8`, conteúdo centralizado, Archivo 600, 16px, `line-height:1.25`, `#3A3D44`, `text-align:center`.
- **Parceiros** (15, nesta ordem): Prefeitura de Extrema · Grupo Energisa · Pandurata Alimentos · Extremamedic Planos de Saúde · MPTran Clínica Médica e Psicológica · Dello · Jofpar · Frum · Viro Aço · Eletan Materiais Elétricos · Force Line · Poli Sopro · MW Auto Peças e Mecânica Waltão · Cadabra Publicidade · Musical Box.
- **⚠ Substituição obrigatória**: as células são **placas tipográficas provisórias** com o nome do parceiro. Devem ser trocadas pelos **arquivos de logotipo oficiais** (PNG com transparência ou SVG), fornecidos pela instituição, com `alt` = nome do parceiro. Ao trocar, normalize a altura visual (ex.: `max-height:44px; object-fit:contain`) para que marcas de proporções diferentes não briguem.

### 11. Contato (`#contato`)

- **Layout**: fundo `#0E1013`, texto `#F6F5F2`. Grid `1fr 1fr`, `gap:72px`, `padding:100px 32px`.
- **Esquerda**: eyebrow "CONTATO" (`#F2B300`); H2 "Venha conhecer o CRIE" (Bricolage 800, 44px); parágrafo `#B9B5AC` 19px `max-width:520px`. Depois quatro blocos (`flex-direction:column`, `gap:24px`, `margin-top:44px`), cada um com label Plex Mono 500 12px `letter-spacing:.12em` `#6E6A63` e valor Archivo 18px `#F6F5F2` (links com hover `#F2B300`):
  - ENDEREÇO — Rua Véu da Noiva, 62 · Extrema, MG
  - TELEFONE E WHATSAPP — (35) 98423-5789 → `tel:+5535984235789`
  - E-MAIL — crieespecial@yahoo.com.br → `mailto:`
  - REDES — facebook.com/crieespecial → `https://www.facebook.com/crieespecial`
- **Direita — formulário**: fundo `#16181C`, `padding:44px 40px`, `flex-direction:column`, `gap:20px`. Título "Mande uma mensagem" (Bricolage 800, 26px). Campos, cada um com label Plex Mono 12px `#8C8880` e controle com fundo `#0E1013`, `border:1px solid #2A2D33`, `radius:2px`, `padding:15px 16px`, `min-height:52px`, Archivo 17px `#F6F5F2`, `:focus` → `border-color:#12A9E0; outline:none`:
  - NOME (text, placeholder "Seu nome completo")
  - E-MAIL OU TELEFONE (text, placeholder "Como podemos responder")
  - ASSUNTO (select): Sou família e quero atendimento · Quero doar · Quero ser voluntário · Sou empresa e quero apoiar · Outro assunto
  - MENSAGEM (textarea, 4 linhas, `resize:vertical`)
  - Submit: label vem da prop `botaoLabel` (padrão "Enviar mensagem"), fundo `#F2B300`, texto `#16181C`, Archivo 600 17px, `min-height:54px`, hover `#FFFFFF`.
  - Nota abaixo: "Formulário de demonstração — conectar a um e-mail ou serviço de envio antes de publicar."
- **⚠** O `onSubmit` do protótipo só faz `preventDefault()`. Ver *State Management*.

### 12. Footer

- **Layout**: fundo `#16181C`, `border-top:1px solid #2A2D33`, texto `#8C8880`. `flex`, `flex-wrap:wrap`, `justify-content:space-between`, `align-items:center`, `gap:28px`, `padding:44px 32px`.
- **Esquerda**: logotipo oficial em 96×45px dentro de uma **placa clara** (`background:#F6F5F2`, `padding:10px 14px`, `border-radius:4px`) — necessária porque o traço do logotipo é escuro e desapareceria no fundo preto. Ao lado, duas linhas em Archivo 15.5px: "CRIE — Centro de Integração Especial" / "Rua Véu da Noiva, 62 · Extrema, MG · Desde 1991".
- **Direita**: mesmos cinco links da nav, Archivo 15.5px `#8C8880`, hover `#F6F5F2`.

## Interactions & Behavior

- **Navegação**: exclusivamente âncoras internas (`#quem-somos`, `#atuacao`, `#historia`, `#ajudar`, `#parceiros`, `#contato`). Adicione `scroll-behavior:smooth` e `scroll-margin-top` equivalente à altura do header sticky (~88px, ou ~132px com a barra de campanha visível) para que os títulos não fiquem escondidos atrás dele.
- **Hover** (todos com transição sugerida de `150ms ease`; o protótipo não declara transições):
  - Links de nav e footer: mudança de cor.
  - Botão escuro: fundo `#16181C` → `#E5006E`.
  - Botão amarelo: fundo `#F2B300` → `#FFFFFF`.
  - Botões outline: preenchem com `#16181C` e o texto vira `#FFFFFF`.
  - Linhas de transparência: título → `#E5006E`.
- **Focus**: campos do formulário mudam a borda para `#12A9E0`. **Atenção:** o protótipo usa `outline:none` — na implementação, forneça um anel de foco visível para navegação por teclado (ex.: `box-shadow:0 0 0 3px rgba(18,169,224,.4)`). Isso é requisito, não preferência: o público da instituição inclui pessoas com deficiência.
- **Animações**: nenhuma. Sem carrossel, sem parallax, sem reveal on scroll. Se quiser adicionar entrada suave, respeite `prefers-reduced-motion`.
- **Estados ausentes do protótipo** (precisam ser desenhados/implementados): envio em andamento, sucesso e erro do formulário; validação de campos; estado vazio da transparência quando não houver documentos.
- **Responsive behavior**: não desenhado. Recomendação —
  - ≥1240px: como está.
  - 900–1240px: contêiner fluido, grids de 3 colunas → 2; hero mantém 2 colunas com H1 em ~52px.
  - <900px: tudo em coluna única; hero com imagem abaixo do texto; grid de áreas → 1 coluna (ou 2); parceiros → 3 colunas; nav colapsa em menu (botão "Doar agora" permanece visível fora do menu); H1 ~40px, H2 ~32px.
  - Alvos de toque mínimos de 44px — os botões já atendem (`min-height` 52–54px nos campos, `padding` generoso nos botões).

## State Management

O protótipo é praticamente sem estado. O que existe:

- **Flags de seção** (props do componente, com `??` para default): `showTopBar`, `showDepoimento`, `showTransparencia`, `showParceiros` — todas `true` por padrão. Em produção viram flags de CMS ou simplesmente conteúdo condicional.
- **`botaoLabel`** (string, default "Enviar mensagem") — texto do submit.
- **`onSubmit`** — `(e) => e.preventDefault()`. Placeholder.

O que a implementação real precisa acrescentar:

- Estado controlado dos quatro campos + validação (nome obrigatório; contato obrigatório e válido como e-mail **ou** telefone; mensagem obrigatória com mínimo razoável).
- Estados de envio: `idle | submitting | success | error`, com feedback acessível (`aria-live`).
- Backend de envio: e-mail transacional ou serviço de formulário. **Não** envie para o Facebook nem dependa de mailto.
- Proteção contra spam (honeypot ou captcha discreto — evite bloquear usuários com deficiência).
- **LGPD**: o formulário coleta dados pessoais e o assunto "Sou família e quero atendimento" pode implicar dado sensível de saúde. Inclua aviso de privacidade e consentimento explícito, e defina retenção. Esse ponto não está resolvido no protótipo.
- Nenhuma busca de dados é necessária para a página — todo o conteúdo é estático. Se um CMS entrar, os candidatos naturais a conteúdo editável são: barra de campanha, cards de áreas, marcos da linha do tempo, depoimentos, documentos de transparência e lista de parceiros.

## Design Tokens

**Cores — base**

| Token | Hex | Uso |
|---|---|---|
| ink-900 | `#0E1013` | fundo das seções mais escuras (hero, contato) |
| ink-800 | `#16181C` | fundo de cards escuros, footer, texto principal em claro |
| ink-700 | `#1A1D22` | fundo de placeholder de imagem em contexto escuro |
| ink-600 | `#2A2D33` | bordas em fundo escuro |
| ink-500 | `#3A3D44` | texto secundário em claro; bordas de botão outline no escuro |
| slate-400 | `#5A5D64` | corpo de texto secundário em claro |
| warm-100 | `#F6F5F2` | fundo claro padrão / texto sobre escuro |
| white | `#FFFFFF` | fundo de cards claros |
| warm-200 | `#EFEDE7` | fundo de placeholder de imagem em contexto claro |
| line-200 | `#E2DFD8` | bordas e divisores em claro |
| line-300 | `#DCD8D0` | divisores da linha do tempo |
| mute-400 | `#9A968C` / `#8A867E` | notas e labels discretos em claro |
| mute-500 | `#8C8880` | texto terciário em escuro |
| mute-600 | `#6E6A63` | labels em escuro |
| body-dark | `#B9B5AC` | corpo de texto sobre fundo escuro |

**Cores — acento (derivadas do logotipo do CRIE)**

| Token | Hex | Uso |
|---|---|---|
| magenta | `#E5006E` | acento primário, hover de CTA, barra de campanha |
| amarelo | `#F2B300` | CTA de doação, eyebrow em fundo escuro |
| roxo | `#8A21CE` | seção de depoimentos, eyebrow |
| ciano | `#12A9E0` | eyebrow, foco de campo, acento de card |
| verde | `#2E9E63` | quinta área de atuação, eyebrow de "como ajudar" |
| roxo-claro | `#E7CBFA` | texto secundário sobre roxo |
| link | `#0B7AA6` | cor de link padrão do documento (hover `#E5006E`) |

A **barra de quatro cores** (magenta, amarelo, roxo, ciano) é um elemento de identidade recorrente — aparece no hero e também no deck da apresentação. Mantenha a ordem.

**Tipografia**

| Papel | Família | Peso | Tamanhos usados |
|---|---|---|---|
| Display / títulos | Bricolage Grotesque | 800 (600 em citações) | 66 · 44 · 40 · 29 · 27 · 26 · 22 px |
| Corpo / UI | Archivo | 400 / 500 / 600 | 21 · 19 · 18 · 17.5 · 17 · 16.5 · 16 · 15.5 · 15 · 14.5 · 13.5 px |
| Eyebrow / label / mono | IBM Plex Mono | 500 | 13 · 12.5 · 12 · 11.5 · 10 px |

- `letter-spacing`: títulos `-.025em` a `-.03em`; eyebrows `+.12em` a `+.16em` com `uppercase`; labels mono `+.1em`.
- `line-height`: display `1.02–1.1`; corpo `1.5–1.6`; citações `1.32`.
- `text-wrap: pretty` em todos os títulos e parágrafos longos.
- Fontes carregadas do Google Fonts. Em produção, prefira self-host (WOFF2 + `font-display:swap`) para não depender de terceiros.

**Espaçamento** — escala de 4px, valores efetivamente usados: 4 · 5 · 6 · 8 · 12 · 14 · 16 · 18 · 20 · 24 · 26 · 28 · 30 · 32 · 34 · 38 · 40 · 44 · 48 · 52 · 56 · 64 · 72 · 88 · 96 · 100 · 104 · 112 px.

- Padding vertical de seção: **96–104px** (topo/base).
- Padding horizontal de seção: **32px**.
- Contêiner: `max-width:1240px`, centralizado.
- Gap entre colunas principais: **64px** (72px no contato).
- Gap de grid de cards: **16–28px**.

**Border radius** — `2px` em botões e campos (quase reto, deliberado); `4px` na placa do logotipo do footer. Nenhum card tem raio: cantos vivos são parte da identidade.

**Sombras** — nenhuma. A separação é feita por cor de fundo e borda de 1px. Não introduza sombras.

**Outros** — `backdrop-filter: blur(12px)` no header sticky; hachura de placeholder `repeating-linear-gradient(135deg, <cor> 0 12px, transparent 12px 24px)`; barras de acento no topo dos cards com `7px`; blocos de cor do hero com `44×7px`.

## Assets

Em `design/assets/`:

| Arquivo | Origem | Uso | Observação |
|---|---|---|---|
| `crie-logo-oficial.png` | fornecido pelo cliente | header (118×55) e footer (96×45) | PNG 150×70 com transparência. **Pedir SVG** para nitidez em telas retina. |
| `crie-logo.jpeg` | fornecido pelo cliente | não usado na landing (vem do deck da apresentação) | pode ser ignorado nesta implementação |

**Assets pendentes de entrega pela instituição:**

1. **Foto do hero** — horizontal, atendimento ou oficina, com autorização de uso de imagem (há menores de idade envolvidos — autorização por escrito é obrigatória).
2. **Foto da fachada da sede** — vertical/quadrada, seção História.
3. **15 logotipos de parceiros** — PNG com transparência ou SVG.
4. **PDFs de transparência** — relatório de atividades, demonstrativo financeiro, estatuto social, certidões.
5. **Chave Pix oficial** — para o card de doação.
6. **Horário de atendimento** — não consta no protótipo; considere acrescentar ao bloco de contato.
7. **Número real de famílias atendidas** — a barra de campanha diz "mais de 100"; confirmar ou remover.

Nenhum ícone é usado na página — por decisão de design. Não acrescente ícones decorativos.

## Files

- `design/Site CRIE - Landing.dc.html` — a landing page (design de referência).
- `design/support.js` — runtime necessário para abrir o HTML acima no navegador. Não é parte do design.
- `design/assets/` — logotipos.
- `screenshots/` — capturas de cada seção, na ordem vertical da página, para consulta rápida sem abrir o HTML:

| Arquivo | Seção |
|---|---|
| `01-hero-e-header.png` | barra de campanha, header e hero |
| `02-quem-somos.png` | faixa de credenciais e Quem somos |
| `03-areas-de-atuacao.png` | cinco cards de áreas de atuação |
| `04-historia.png` | linha do tempo 1991–2016 |
| `05-depoimentos.png` | três depoimentos em fundo roxo |
| `06-como-ajudar.png` | doação, voluntariado, empresas |
| `07-transparencia.png` | lista de documentos |
| `08-parceiros.png` | grid dos 15 parceiros |
| `09-contato.png` | dados de contato e formulário |
| `10-footer.png` | rodapé |

As capturas são de viewport desktop (~1240px de contêiner). Onde a especificação textual e a captura divergirem, **a especificação vale** — as capturas mostram placeholders de imagem e as placas tipográficas provisórias dos parceiros.

O deck da apresentação do projeto acadêmico e o roteiro de fala ficam fora deste pacote — este handoff cobre apenas o site institucional.

## Notas finais para quem implementa

- **Acessibilidade é requisito de negócio aqui**, não checklist. A instituição atende pessoas com deficiência. Garanta: contraste AA em todos os textos (a paleta foi escolhida com isso em mente), anel de foco visível, navegação completa por teclado, `alt` descritivo em todas as imagens, hierarquia correta de headings (um único `h1`), rótulos associados a todos os campos e `aria-live` nas mensagens do formulário.
- **Não converta as seções em carrossel.** Depoimentos e parceiros estão deliberadamente estáticos.
- **Copy em português do Brasil** — preserve a acentuação e o tom (direto, sem adjetivação vazia). Tudo entre colchetes `[...]` no HTML é pendência de conteúdo, não copy final.
