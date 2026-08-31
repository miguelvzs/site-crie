# Logotipos dos parceiros

Os arquivos desta pasta abastecem a seção Parceiros da landing. Enquanto um logotipo não chega, a célula renderiza o nome da empresa em placa tipográfica — estado previsto no design, não um erro.

## Como adicionar um logotipo

1. Coloque o PNG nesta pasta seguindo a convenção de nome abaixo
2. Preencha `logoUrl` do parceiro em `content/landing.json`

```json
{
  "nome": "Grupo Energisa",
  "logoUrl": "/parceiros/grupo-energisa.png",
  "logoW": 165,
  "logoH": 55
}
```

`logoW` e `logoH` são as dimensões reais do arquivo em pixels, e têm que bater
com ele. São o que impede o navegador de ampliar o logotipo (ver abaixo) e o que
reserva o espaço antes de a imagem carregar, evitando salto de layout.

Para conferir todas de uma vez:

```bash
python -c "
from PIL import Image; import glob, os
for f in sorted(glob.glob('public/parceiros/*.png')):
    print(os.path.basename(f), Image.open(f).size)"
```

## Especificação dos arquivos

### Regra: logotipo nunca é ampliado

A célula usa `width`/`height` reais mais `max-h-16 w-auto max-w-full`. Os limites
de CSS agem só para baixo: arquivo grande é reduzido (redução mantém nitidez),
arquivo pequeno fica no tamanho nativo em vez de ser esticado.

Consequência prática: **o tamanho do logotipo na grade é o tamanho do arquivo**,
até o teto de 64px de altura. Arquivo pequeno aparece pequeno. É o comportamento
desejado — borrado seria pior — mas é mais um motivo para pedir o arquivo grande.

| Item | Valor |
|---|---|
| Formato | PNG com canal alfa (fundo transparente) — ou SVG, se a empresa fornecer |
| Altura mínima | 256px (4× o slot de 64px, para telas retina) |
| Largura máxima | 800px |
| Fundo | Transparente. **Não** use PNG com fundo branco chapado |
| Cor | Versão colorida principal da marca. A célula é branca, então versões "para fundo escuro" não servem |
| Margem interna | Nenhuma. O arquivo deve ser recortado no limite da marca — o espaçamento vem do CSS |
| Nome do arquivo | Slug do nome, minúsculo, sem acento: `grupo-energisa.png`, `mw-auto-pecas.png` |

O `next/image` converte para WebP/AVIF na entrega e serve a variante do tamanho certo, então não é preciso otimizar o PNG à mão nem gerar versões `@2x`. Envie o maior arquivo disponível dentro dos limites acima.

## Por que não pegar em agregador de logotipos

Os arquivos atuais vieram do site antigo do próprio CRIE, que é fonte legítima. Para as substituições futuras, peça à empresa — não baixe de agregador (seeklogo, brandfetch, vetores.org). `docs/specs/constitution.md` tem regra dura sobre isso, por três motivos concretos:

- **Versão errada.** Agregador guarda a marca do ano em que alguém subiu. Empresa troca identidade visual e o site fica exibindo a antiga
- **Qualidade insuficiente.** Exemplo medido: o brasão publicado no site da Prefeitura de Extrema tem 150×150px, e some em tela retina no slot de 64px de altura
- **Uso de marca.** Logotipo é marca registrada. Quem autoriza o uso é a empresa, e a autorização normalmente vem junto com o arquivo correto

O caminho é pedir o material a cada parceiro — empresa grande costuma ter central de marca (a da Energisa é restrita a parceiros e fornecedores, acesso que o CRIE tem e um terceiro não), e empresa pequena manda o arquivo por e-mail.

## Estado atual

Os 15 logotipos vieram do site antigo do CRIE (`crieextrema.com.br`, WordPress), do carrossel "Nossos Apoiadores" e da biblioteca de mídia em `wp-content/uploads/2019/09/`. Material publicado pela própria instituição.

Processamento aplicado: recorte da moldura vazia (alfa nos PNG, fundo neutro claro nos JPG), conversão para PNG e renomeação por slug. Nenhum foi ampliado — upscale só inventa nitidez que o arquivo não tem.

### Limitações conhecidas

- **Resolução baixa em 13 dos 15.** O site antigo servia os logotipos a 174×99px, e depois do recorte a maioria tem entre 31 e 94px de altura para um slot de 64px. Em tela retina ficam macios. Só Prefeitura (546×552) e Musical Box (475×263) atendem a especificação acima. Trocar quando as empresas mandarem o arquivo original
- **MW Auto Peças e Musical Box** têm fundo colorido chapado, e aparecem como retângulo azul-marinho e azul na grade. É o desenho da marca no arquivo disponível, não defeito de recorte. Versão com fundo transparente resolveria
- Cinco logotipos do site antigo ficaram de fora por não constarem da lista atual de parceiros: Drogaria Santa Rita, Fagor Ederlan, Nasha, Loja Vip e um quarto com monógrama "CB". Se algum ainda for parceiro, os arquivos estão em `wp-content/uploads/2019/09/` (`1-1.jpg`, `2-1.jpg`, `3.jpg`, `4.jpg`, `11.jpg`)

### Confirmar com a instituição

A lista veio de um site parado desde 2019. Vale confirmar com a direção quais empresas seguem apoiando antes de publicar — exibir ex-parceiro é pior do que exibir menos.
