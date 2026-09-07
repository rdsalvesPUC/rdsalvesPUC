# apple-academy-collection

Site estático de uma página com a "Coleção de criações" para a inscrição na Apple Developer Academy PUCPR — mostrando três plugins de Figma feitos por Rodrigo Alves como ferramentas pessoais de fluxo de trabalho.

## Estrutura

```
index.html
assets/
  css/style.css
  js/script.js
  img/            ← coloque aqui os prints/gifs dos plugins
.nojekyll         ← evita que o GitHub processe o site com Jekyll
```

O site usa apenas caminhos relativos, então funciona tanto localmente quanto publicado em `https://rdsalvesPUC.github.io/apple-academy-collection/`.

## Como publicar no GitHub Pages

1. Copie todos os arquivos deste pacote para a raiz do repositório `rdsalvesPUC/apple-academy-collection` (mantendo a estrutura de pastas).
2. Faça commit e push para a branch `main`.
3. No GitHub, vá em **Settings → Pages**.
4. Em "Build and deployment", escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve. Em alguns minutos o site fica disponível em:
   `https://rdsalvesPUC.github.io/apple-academy-collection/`
7. Use essa URL no link de "coleção de criações" da inscrição.

## O que falta preencher

Todo texto placeholder está marcado com `[PLACEHOLDER — ...]` no `index.html` (e em itálico na página, para ficar visualmente óbvio). Para cada plugin (Figma Navigation, FigLens, Json to Layout) falta:

- Tagline de uma linha
- Texto de "A ideia"
- Texto de "O desenvolvimento"
- Tags de stack e status (ex: `Figma Plugin API`, `TypeScript`, `Uso pessoal` / `Publicado`)
- Imagem/gif em `assets/img/` (basta trocar o bloco `.plugin-media` pelo `<img>` — o comentário `TODO` já indica onde)
- Links reais de Figma Community / código-fonte
- Texto de abertura em "Por que plugins?"
- Links do rodapé (GitHub, LinkedIn, Figma)

Assim que você mandar esse conteúdo, é só eu atualizar o `index.html` — a estrutura e o design já estão prontos.
