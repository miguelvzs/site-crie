# Pendências

Bloqueiam a publicação. Não bloqueiam build nem deploy — cada uma renderiza placeholder explícito.

## Assets e dados da instituição
- [x] Logo oficial recebido (`public/brand/crie-logo-oficial.png`, PNG 150×70 com transparência)
  - [ ] Pedir **SVG** da marca — em tela retina o PNG fica macio (handoff)
- [ ] **Foto do hero** — horizontal, atendimento ou oficina. Autorização de uso de imagem por escrito (há menores)
- [ ] **Foto da fachada da sede** — vertical/quadrada, seção História
- [x] **15 logotipos de parceiros** — recuperados do site antigo (`crieextrema.com.br`)
  e implementados. Ressalvas de qualidade e os 5 apoiadores antigos fora da lista
  atual em `public/parceiros/README.md`
  - [ ] Confirmar com a direção quais empresas seguem apoiando (lista de 2019)
  - [ ] Pedir arquivo em alta — 13 dos 15 vieram a 174×99px e ficam macios em retina
- [ ] **PDFs de transparência** — relatório de atividades, demonstrativo financeiro, estatuto social, certidões
- [ ] **Chave Pix oficial** — card de doação
- [ ] **Horário de atendimento** — não consta no protótipo; campo `contato.horarioAtendimento` já existe e some quando `null`
- [ ] **Número real de famílias atendidas** — a barra de campanha diz "mais de 100"; confirmar com a direção ou remover (`topBar.fraseConfirmada: false`)
- [ ] Confirmar telefone, e-mail e endereço com a diretora (Agnes) — podem estar desatualizados
- [ ] Definir domínio (reaproveitar crieextrema.com.br ou registrar novo) e setar `NEXT_PUBLIC_SITE_URL` na Vercel

## Configuração técnica
- [ ] `RESEND_API_KEY` na Vercel — sem ela o formulário responde 503 com telefone/e-mail alternativos
- [ ] `CONTATO_EMAIL_DESTINO` (default: e-mail institucional) e `CONTATO_EMAIL_REMETENTE` (precisa de domínio verificado no Resend)

## Lacuna funcional conhecida (handoff, prioridade de produto)
- [ ] **Fluxo de doação real.** Hoje "Quero doar" só rola até o formulário. O handoff aponta isso como a maior lacuna: deveria ser Pix com QR code copiável e/ou gateway com cartão recorrente

## Dados reais já em uso
Endereço Rua Véu da Noiva, 62 · Extrema/MG · CEP 37640-000 — Telefone (35) 98423-5789 — E-mail crieespecial@yahoo.com.br — CNPJ 25.651.282/0001-18 — facebook.com/crieespecial — Instagram @apaedeextrema
