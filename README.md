<div align="center">

# 🏺 Lojica — Catálogo

**Loja online de uma única artista para venda de cerâmica, pintura e artesanato.**

Este repositório é o **front-end** da Lojica — atualmente na fase de **POC** (prova de conceito): um catálogo estático, sem carrinho, login ou pagamento.

[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Status](https://img.shields.io/badge/status-POC-b5502e)](#status-do-projeto)
[![License](https://img.shields.io/badge/license-privado-8c7c69)](#)

</div>

---

> **GIF de demonstração**: ainda não incluído — as ferramentas de captura de tela disponíveis nesta sessão não conseguiram gravar a interação (pane do navegador não renderizou, e a extensão Claude in Chrome não estava conectada). Fica como pendência: gravar a navegação pelo catálogo (`npm run dev`, abrir uma peça, ver a ficha técnica) e substituir esta nota por um GIF real.

## O que é isso

A Lojica é uma loja para uma artista vender suas peças diretamente, sem depender de marketplace. Este repositório cobre só o **catálogo visual** — a etapa mais inicial do projeto, pensada para ser publicada de graça no GitHub Pages antes de qualquer investimento em backend, banco de dados ou infraestrutura paga.

O projeto completo (documentação de produto, arquitetura, modelo de dados, identidade visual) vive fora deste repositório, numa pasta de trabalho local — este README cobre só o que está aqui.

## Status do projeto

| Fase | O que inclui | Está aqui? |
|---|---|---|
| **POC** (atual) | Catálogo estático, sem back-end | ✅ Este repositório |
| MVP | Backend (Spring Boot), pagamento real (Mercado Pago), frete (Melhor Envio), painel administrativo, banco de dados PostgreSQL na AWS | ⏳ Repositório `lojica-backend` separado, ainda não iniciado |
| Versão final | Ambientes separados, i18n, mais robustez operacional | ⏳ Futuro |

**Nesta fase não existe**: carrinho de compras, checkout, login, conta de usuário, painel administrativo, ou qualquer chamada de rede — os dados do catálogo estão embutidos no próprio código (`src/data.ts`).

## Rodando localmente

Pré-requisito: Node.js 20+.

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar o build de produção (o que efetivamente vai pro GitHub Pages):

```bash
npm run build
npm run preview   # conferir o build localmente antes de publicar
```

## Estrutura

```
src/
  types.ts     tipos das peças e coleções (Piece, Collection)
  data.ts      dados do catálogo — trocar pelas peças reais da artista aqui
  App.tsx      catálogo agrupado por coleção + modal de detalhe da peça
  App.css      estilos dos componentes
  index.css    tokens de cor (paleta) e reset base
```

Sem gerenciador de estado, sem rotas, sem chamadas de API — deliberadamente simples para esta fase.

## Identidade visual

Paleta inspirada em cores reais de esmalte de cerâmica (celadon, óxido de ferro), com suporte a tema claro/escuro via `prefers-color-scheme`. O catálogo é agrupado por coleção (técnica/série), não uma grade única — reflete como a artista pensa o próprio acervo.

## Publicação (GitHub Pages)

Ainda não configurada nesta versão — pendente de decisão sobre o caminho final da URL (`vite.config.ts` precisa do `base` correspondente ao nome deste repositório) e workflow do GitHub Actions para deploy automático a cada push.
