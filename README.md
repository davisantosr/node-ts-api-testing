## API - Typescript - Node.js

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

- Execute o comando seguinte rodar migrations e criar as tabelas no banco de dados:

```bash
yarn typeorm migration:run
```

## rotas para teste:

- Criação de usuário:

```bash
POST /users/

# Exemplo de Dados Para Criação de usuário:
"name": "user a",
"email": "user@email.com",
"password": "123456",
"age": 40,
"ethnicity": 'black', (afro, caucasian, indigenous, other)
phone: '9999999999',
weight: 90,

```

- Emissão de token de acesso:

```bash
POST /users/session
```

- Listagem de Usuários (Autenticação requerida)

```bash
GET /users/

# Exemplo de Dados Para Iniciar Sessão:
"email": "user@email.com",
"password": "123456",
```

```bash
GET /users/:id => Busca um usuário por Id
PUT /users/:id => Atualiza os dados do usuário
DELETE /users/:id => Deleta usuário
```

===========================================

- Criação de Endereço

```bash
POST /addresses/

#Exemplo de Dados Para Criaçãod de Endereço:
"address": "Avenida X",
"number": 123,
"complement": "Proximo ao ponto Y",
"cep": "123456",
"city": "Fortaleza",
"state": "Ceara"

```

- Demais rotas

```bash
GET /addresses/ => Lista Endereços
GET /addresses/:id => Busca um endereço por Id
PUT /addresses/:id => Atualiza os dados do endereço
DELETE /addresses/:id => Deleta endereço
```
