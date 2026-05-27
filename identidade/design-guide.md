# Identidade visual

> Como a marca do Josué aparece em tudo que o MazyOS gera.
> As skills de conteúdo, carrossel e site leem esse arquivo antes de criar qualquer visual.
> Calibrada a partir da foto profissional dele — poltrona de couro, estante de livros, luminária de banqueiro, camisa bordô, óculos pretos, barba grisalha, tatuagem tribal e brinco (presença clássica + personalidade contemporânea).
> Edite quando a marca evoluir.

---

## Cores

- **Fundo principal:** `#FAF6F0` — creme quente claro, base de todas as páginas
- **Fundo alternativo / cards:** `#F5EEDC` — bege creme um tom abaixo, pra seções alternadas
- **Fundo profundo (footer, áreas de contraste):** `#ECE1CB` — bege mais saturado
- **Texto principal (títulos):** `#1F1410` — marrom-preto, dialoga com madeira e couro
- **Texto secundário (corpo):** `#5B4A3F` — marrom médio, leitura calma
- **Cor de destaque / CTA:** `#7B2D2E` — bordô (vinho da camisa do Josué), usado em botões, links, itálicos de títulos
- **Bordô hover:** `#5C2122` — versão mais escura pra hover de botões
- **Acento secundário (ornamentos):** `#B68A4F` — latão/bronze da luminária de banqueiro; divisórias, ícones especiais, badges
- **Linha sutil / detalhes:** `#D9CBB8` — bege quente, divisórias e bordas
- **Cor proibida:** azul/cinza frio, branco gelado, neon, dourado glamour, qualquer coisa que destoe do clima "biblioteca quente"

---

## Tipografia

- **Títulos e destaques:** `Cormorant Garamond` (Google Fonts) — serif clássica editorial, perfeita pra "biblioteca de psicanalista". Itálico nas palavras-chave do título
- **Corpo, subtítulos e botões:** `Inter` (Google Fonts) — sans-serif limpa, ótima leitura
- **Peso do título:** 500-600 no regular, 400 italic nas palavras destacadas
- **Tamanhos sugeridos:**
  - Hero H1: 56-72px (clamp pra responsivo)
  - H2 seção: 36-48px
  - H3 card: 20-24px
  - Corpo: 16-18px
  - Botão: 14-16px

---

## Estilo geral

**Clássico-editorial quente.** Vibe de biblioteca com poltrona de couro,
luminária de banqueiro acesa, livros antigos — mas com uma janela
aberta deixando entrar luz natural. Profundidade sem peso.

Não é minimalista (vazio demais não combina com a presença do Josué).
Não é glamour de clínica de estética. Não é frio.

Espaçamento generoso, mas com elementos visuais que dão calor:
divisórias em bege/bronze, foto grande dele, tipografia editorial com
itálico em palavras-chave.

---

## Elementos-chave

- **Bordas:** sutis, em `#D9CBB8` com 1px
- **Border-radius dos cards:** 12px (sutil, sem virar boutique)
- **Botões:** preenchidos em bordô, texto creme `#FAF6F0`, padding generoso, border-radius 8px
- **Sombras:** quentes — `0 4px 20px rgba(31, 20, 16, 0.08)` nos cards, `0 14px 36px rgba(31, 20, 16, 0.12)` em hover
- **Ícones / ornamentos:** monocromáticos em bordô (principal) ou bronze (secundário). Linha fina ou minimal-line.

---

## O que NUNCA fazer

- **Promessas de cura** ou resultado garantido (proibição ética CFP)
- **Depoimentos de pacientes**, mesmo anônimos
- Foto humana em destaque que **não seja do próprio Josué**
- Linguagem de **"transformação rápida"**, "destrave", "alavanque"
- Cores **frias** (azul, cinza-azulado, branco gelado)
- Tipografia **decorativa demais** (script, handwritten, fantasy)
- Emoji em peças formais (site, email pra paciente novo)
- Elementos minimalistas estéreis (muito espaço vazio sem warmth)

---

## Logo

- **Arquivo:** *(ainda não existe — quando criar, salvar em `identidade/logo.svg`)*
- **Versão pra fundo claro:** padrão
- **Onde usar:** header do site, slide final do carrossel, header de propostas/emails formais
- **Tamanho sugerido:** largura entre 120-180px no header do site

---

## Foto do Josué

- **Arquivo master:** `identidade/josue.jpg` — retrato no consultório (poltrona de couro, estante de livros, luminária de banqueiro), camisa bordô
- **Cópia pro site:** `site/assets/josue.jpg` — o Vercel só serve arquivos dentro de `site/`, então a foto precisa estar duplicada lá pra ser servida em produção. Quando trocar a foto, atualizar nos dois lugares.
- **Onde usar:** hero do site (background full-bleed com overlay lateral bordô), seção "Sobre" (card split), carrosséis quando fizer sentido
- **Tratamento:** sem filtros pesados, sem preto-e-branco forçado. Foto natural, postura sóbria, olhar direto.
- **Cropping no hero:** `background-position: 65% center;` (mostra ele à direita, deixando espaço à esquerda pro overlay + texto)
- **Cropping na sobre:** `object-fit: cover; object-position: center 30%;` (foca rosto/torso)

---

## Observações adicionais

A paleta veio direto da foto profissional do Josué: bordô da camisa,
bronze da luminária, marrom da madeira/couro, bege da luz natural.
Quando ele trocar de cenário (consultório novo, blazer diferente),
revalidar a paleta antes de continuar usando.
