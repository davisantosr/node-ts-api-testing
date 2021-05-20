###API - Typescript - Node.js

- Clone o repositório

```bash
git clone https://github.com/davisantosr/node-ts-api-users-addresses.git
```

- Entre na pasta do projeto e no terminal rode o comando para baixar as dependências:

```bash
yarn //utilizando yarn
npm install --save //utilizando o npm
```

- Para iniciar o container configurado no arquivo docker-compose.yml execute o comando:

```bash
docker-compose up -d
```

- Com o container rodando execute o comando para iniciar o servidor de desenvolvimento:

```bash
yarn dev
```

- O servidor está configurado para executar na porta **3333**

rotas:

```bash
GET /users/ => Lista Usuários
POST /users/ => Cria novo usuário
POST /users/session => Inicia sessão
GET /users/:id => Busca um usuário por Id
PUT /users/:id => Atualiza os dados do usuário
DELETE /users/:id => Deleta usuário

**Dados:**
name,
email,
password,
age,
ethnicity (afro, caucasian, indigenous, other),
phone,
weight,

===========================================

GET /addresses/ => Lista Endereços
POST /addresses/ => Cria novo Endereço
GET /addresses/:id => Busca um endereço por Id
PUT /addresses/:id => Atualiza os dados do endereço
DELETE /addresses/:id => Deleta endereço

**Dados:**
address,
number,
complement,
cep,
city,
state,

```
