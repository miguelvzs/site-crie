# Spec — Página Quem Somos (`/quem-somos`)

Status: draft, aguarda aprovação Miguel

## Objetivo
Contar história/credibilidade da instituição, sem infantilizar. Reforça confiança pra quem tá decidindo doar/confiar os cuidados de um familiar.

## Blocos

### 1. História
Texto real (brief, `pendencias.md`):
> Instituição sem fins lucrativos fundada em 1991, a partir de um grupo de cidadãos solidários com a falta de atendimento especializado a pessoas com deficiência em Extrema, sul de Minas Gerais. Atende pessoas com deficiência e suas famílias para desenvolver suas potencialidades e habilidades, promovendo a inclusão. Filiada à Federação das APAEs.

### 2. Missão/Valores
Pendente — brief não trouxe texto formal de missão/valores separado da história. Perguntar Miguel ou derivar da história (não inventar frase institucional nova sem validação).

### 3. Linha do tempo de certificações
Componente `Timeline` (novo, entra em `ui/`), dado real:
- 1991 — Fundação
- 2005 — Filiação à Federação das APAEs
- 2006 — Título de Utilidade Pública Estadual + inscrição no CNAS
- 2007 — Presidente e diretora recebem título de "Cidadão Honorário Extremense"
- 2010 — Título de Utilidade Pública Federal
- 2016 — Autorização CAEE + Certificado de Entidade Beneficente

### 4. Equipe
Pendente — sem fotos/nomes/cargos ainda (ver `pendencias.md`). Placeholder marcado, não inventar nomes.

## Conteúdo
Novo arquivo `content/quem-somos.json`: história, timeline (array), equipe (array vazio + flag placeholder).

## Critério de aceite
- [ ] Timeline navegável e legível por leitor de tela (lista semântica `<ol>`, não só posicionamento visual) — ordem cronológica = ordem do DOM
- [ ] Heading order correto (h1 página, h2 por bloco)
- [ ] Sem dado inventado (missão/valores/equipe ausentes viram placeholder explícito, não texto genérico)
- [ ] Conteúdo vem de `content/quem-somos.json`, não hardcoded no componente
- [ ] Lighthouse A11y ≥95

## Pendências
- Texto formal de missão/valores (ou confirmação que história = missão)
- Fotos/nomes/cargos da equipe
