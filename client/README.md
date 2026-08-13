# Introdução ao React

Esse repositório contém uma template simples feita para explicar o funcionamento básico do React.

Ele contém uma API (`/api`) feita em PHP, que permite as seguintes operações:

- **GET /api/messages** — Lista todas as mensagens
- **POST /api/messages** — Cria uma nova mensagem (body: {`title` : string, `body` : string})
- **PUT /api/messages/{id}** — Atualiza uma mensagem existente (body: {`title` : string, `body` : string})
- **DELETE /api/messages/{id}** — Remove uma mensagem

Ele também possui um cliente web (`/client`), baseado na template do Vite (`npm create vite@latest`)

# Como rodar

## Api:

Requisitos:

- PHP 8

Comando:

```bash
php -S localhost:8000 api/index.php
```

## Web:

Requisitos:

- Node 22+

Comando:

```bash
cd client
npm install
npm run dev
```
