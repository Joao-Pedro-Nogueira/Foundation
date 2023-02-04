# Fundamentos NodeJS.

Versão Node utilizada neste projeto: v18.13.0

## Para criar uma aplicação em NodeJS:

1. Criar um diretório para o projeto e rodar o comando `npm init -y`. A flag `-y` indica a resposta 'yes' a todas as perguntas, como 'author' e 'license'.
2. Criar um diretório `src` contendo o arquivo principal da aplicação: `server.js`.
3. Importar o módulo interno do Node 'http' utilizando sintaxe CJS (common JS): `const http = require('http')` ou ESM: `import http from 'node:http'`.
4. Iniciar o servidor com a seguinte função `code 1`. Neste caso, o servidor irá rodar na porta 3333 do localhost.

5. Para rodar o servidor, usar o comando `command 1` no terminal na raíz do projeto.

`code 1:`

```js
const server = http.createServer((request, response) => {
  response.end('Hello world')
  // Rotas
})

server.listen(3333)
```

`command 1:`

```bash
node --watch src/server.js
```

A flag `--watch` só está disponível para versões 18+ do Node.

## Importações de módulos com NodeJS

1. Para usar importações no modelo EcmaScript Modules adicionar a propriedade `"type": "module",` no `package.json`.
2. Quando for fazer uma importação de um módulo próprio do Node, utilizar a seguinte sintaxe: `import http from 'node:http'`

## Criação de rotas com NodeJS

1. Exemplo (`example 1`) de duas rotas criadas:
   1.1. Listagem de tasks.
   1.2. Criação de uma nova task (ainda estatico).

`example 1:`

```js
import http from 'node:http'
import { randomUUID } from 'node:crypto'

const tasks = []

const server = http.createServer((request, response) => {
  const { method, url } = request

  if (method === 'GET' && url === '/tasks') {
    return response
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(tasks))
  }

  if (method === 'POST' && url === '/tasks') {
    const newTask = {
      id: randomUUID(),
      title: 'Finalizar desafio de Node',
      description:
        'Finalizar desafio de criação de servidor da trilha de NodeJS',
      created_at: new Date()
    }

    tasks.push(newTask)

    return response.end('Usuário criado')
  }

  return response.end(404)
})

server.listen(3333)
```
