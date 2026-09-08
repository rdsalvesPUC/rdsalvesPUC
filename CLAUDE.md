# apple-academy-collection

Site estático do Rodrigo Alves, feito para a inscrição no processo seletivo da
**Apple Developer Academy PUCPR — turma 2027-2028**.

> **Prazo da inscrição: 13/set/2026.** O edital pede dois links separados —
> um de **portfólio de projetos** e um de **coleção de criações** (hobbies e
> trabalhos criativos). O site multipage atende os dois com URLs distintas.

Publicação: GitHub Pages em `https://rdsalvesPUC.github.io/apple-academy-collection/`
(repo de projeto, então **todos os caminhos são relativos** — nada de `/assets/...`
com barra inicial, senão quebra em produção).

---

## Branches

Três direções de layout, empilhadas linearmente sobre a `main`. Todas já no `origin`.

| Branch | O que é |
|---|---|
| `main` | Só o commit inicial (LICENSE + README do GitHub). Nenhum layout mesclado ainda. |
| `layout-v1-portfolio` | v1 — página única, tema escuro, cards empilhados. Fontes do Google Fonts. |
| `layout-v2-editorial` | v2 — página única, identidade visual real do portfólio do Rodrigo (ArgentCF + Moderat, preto/branco/coral). |
| `layout-v3-multipage` | v3 — **branch mais avançada.** Site multipage: home, portfólio, coleção e CV. |

Nenhuma decisão final foi tomada sobre qual direção seguir. Quando decidir,
mesclar a escolhida na `main` (o GitHub Pages serve a partir de `main` / root).

---

## Estrutura (v3)

```
index.html          Home — "Quem eu sou" + navegação para as 3 seções
portfolio.html      10 projetos de cliente (conteúdo e imagens do PDF original)
colecao.html        Plugins de Figma (é o link da "coleção de criações" do edital)
cv.html             Currículo completo
assets/
  css/style.css     Design system inteiro, um arquivo só
  js/script.js      Reveal on scroll (progressive enhancement)
  fonts/*.woff2     ArgentCF (6 pesos) + Moderat (2) — convertidos de .ttf/.otf
  icons/*.svg       Setas e "×" (não referenciados: os ícones estão inline no HTML)
  img/logos/        10 logos de cliente, 300x300 PNG
  img/projects/     21 imagens dos projetos, JPEG
```

## Design system

- **Tipografia:** ArgentCF (serifada, títulos editoriais — o padrão é misturar
  romano e itálico no mesmo título: "Quem *eu sou*", "My *Work*") + Moderat
  (grotesca, corpo de texto, labels em caixa alta com tracking largo).
- **Cores:** `--ink: #141414`, `--paper: #fbfaf8`, `--coral: #e8552e`.
- **Padrões recorrentes:** painéis full-bleed alternando claro/escuro; `.rail`
  (label rotacionado 90° na margem esquerda, com um tique vertical); grades com
  borda de 1px; botão circular; tag `Client // Nome` sobre a imagem.
- **Nav:** `position: fixed` com `mix-blend-mode: difference`, para funcionar
  sobre painéis claros e escuros sem trocar de cor.

### Duas armadilhas já resolvidas — não regredir

1. **Reveal on scroll é progressive enhancement.** O CSS deixa tudo visível por
   padrão; o JS adiciona `.reveal-ready` (estado inicial escondido) só depois de
   confirmar que o `IntersectionObserver` existe. Se inverter isso, o conteúdo
   some quando o JS falha ou demora.
2. **Não empilhar `.wrap` junto com padding próprio no mesmo elemento.** As duas
   classes definem o shorthand `padding` e uma sobrescreve a outra por inteiro.
   Isso já quebrou o espaçamento no mobile uma vez.

---

## O que ainda é placeholder

Marcado no HTML como `[PLACEHOLDER — ...]` e, na página, em itálico com opacidade
reduzida (`.placeholder-text`). Buscar por `PLACEHOLDER` e `TODO`.

**`colecao.html` — o conteúdo dos plugins nunca chegou.** Os três plugins são
**Figma Navigation**, **FigLens** e **Json to Layout**. Falta, para cada um:
tagline, texto de "A ideia", texto de "O desenvolvimento", tags de stack/status,
imagem (o Rodrigo tem print de só um deles) e os links reais. Falta também o
texto de abertura "Por que plugins?".

**`index.html`** — falta o parágrafo final do "Quem eu sou" (sugestão: momento
atual, a segunda graduação em Sistemas de Informação na PUCPR, unir design e
código — é o que conecta a home com a coleção).

**`cv.html` — a Casas Bahia está como rascunho.** O CV de origem é de 2024 e não
tem os últimos 4 anos. A entrada existe, marcada com borda coral
(`.cv-entry.is-placeholder`), escrita a partir do que o Rodrigo contou: sistemas
logísticos, migração do IBM PCON de plataforma alta para baixa, React + Java +
Ant Design. **Período e texto precisam ser confirmados por ele.**

**`portfolio.html`** — os botões "Visit Site / Visit UX / Visit UI" estão com
`href="#"`; as URLs reais nunca foram fornecidas.

**Links do rodapé** — o GitHub está com `href="#"` em todas as páginas.

---

## Decisões já tomadas (não refazer sem perguntar)

- **Fontes:** o Rodrigo confirmou ter licença web da ArgentCF e da Moderat.
  Os `.woff2` foram convertidos a partir dos `.ttf`/`.otf` do Dropbox dele
  (os `.woff2` originais e os `.svg` dos ícones estavam inacessíveis, provável
  sincronização "somente online" do Dropbox). *Ponto em aberto:* o repo é
  público, então os arquivos de fonte ficam baixáveis por qualquer um — ele foi
  avisado de que isso é diferente de apenas servir a fonte, e decidiu subir.
- **Imagens dos clientes:** extraídas do PDF do portfólio dele com PyMuPDF e
  redimensionadas para no máximo 1100px. Ele autorizou usar todas.
- **Avisos datados removidos:** o PDF tinha notas do tipo "projeto ainda em
  desenvolvimento, não considero ético expor" (CL Joias, Casas Pedro, Unimarc,
  Americanas). Depois de tantos anos ficariam errados, então saíram. Os créditos
  de UI (Ana Romaguera, Felipe Miranda) foram mantidos.
- **Idioma:** o site é todo em português. Os projetos que estavam em inglês no
  PDF (Unimarc e partes do e-Bricks) foram traduzidos.
- **Telefone fora do ar por padrão:** está comentado no `cv.html`. Decisão de
  não expor número em página pública; ele pode descomentar.
- **Datas sobrepostas no CV original:** na Infobase, "UX Designer" e "Gerente de
  Soluções Digitais" têm exatamente as mesmas datas (jan 2012 – nov 2015), e o
  Motion Designer no Planetário (ago 2012 – fev 2013) cai dentro desse período.
  Os dois cargos da Infobase foram juntados numa entrada só. **Ele ainda não
  revisou isso.**
- **Logo da Rede D'Or:** em duas imagens diferentes do PDF de origem (a grade de
  logos e o mockup do app), a parte "SÃO LUIZ" aparece de cabeça pra baixo. Como
  está igual nas duas, veio do arquivo original, não da extração. Ele foi
  avisado e ainda não respondeu se é defeito.

---

## Como rodar

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

Não abrir via `file://` — as fontes `@font-face` não carregam por causa de CORS.

## Publicar no GitHub Pages

Settings → Pages → Deploy from a branch → `main` / `(root)`.
O `.nojekyll` já está no repo (evita o processamento por Jekyll).
