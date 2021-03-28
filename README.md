# Marvel Store App

Aplicação que permite buscar characters e comics da Marvel, assim como adicionar e remover os characters e comics dos favoritos de um usuário. Além disso, a aplicação permite cadastro e edição de perfil de usuários para que possam logar no sistema e consumir os dados da [API da Marvel](https://developer.marvel.com/).

## Pré requisitos

### MySQL 8

Guia de instalação disponível em https://dev.mysql.com/doc/refman/8.0/en/installing.html.\
Os scripts de criação do schema e tabelas podem ser encontrados no arquivo db-scripts.ddl, no diretório packages/api.

### Arquivo .env

Necessário criar um arquivo .env dentro do repositório packages/api com as seguintes informações:
```
PORT="Porta do banco de dados"
DB_HOST="Host do banco de dados"
DB_USER="Usuário do banco de dados"
DB_PWD="Senha do banco de dados"
DB_NAME="Nome do database criado no banco de dados"
JWT_KEY="String qualquer"
API_PUB_KEY_MARVEL="Chave pública de acesso à API da Marvel"
API_PRIV_KEY_MARVEL="Chave privada de acesso à API da Marvel"
```

## Instalação

```
yarn install
```
## Testando a aplicação

- Dentro dos repositórios packages/ui ou packages/api realizar o comando `yarn test`.
- Para testar a UI com o cypress, rodar os comandos `yarn run cypress:run` ou `yarn run cypress:open` para abrir a interface do cypress.

## Iniciando o projeto

Rodar o comando `yarn start` para iniciar o projeto no modo de desenvolvimento.

Acessar [http://localhost:3000](http://localhost:3000) para ver a aplicação no browser.

## Rotas

### UI

#### Rotas públicas

- "/register" - permite cadastro de um novo usuário.
- "/login" - realiza o login de um usuário no sistema.

#### Rotas privadas

- "/profile" - visualiza os dados de um usuário e permite edição de seus dados.
- "/" - permite que um usuário faça a busca de characters ou comics.
- "/favorites" - permite que um usuário veja seus characters ou comics favoritos.
- "/item/comics/:id" - busca dados de uma comic a partir de seu id.
- "/item/characters/:id" - busca dados de um character a partir de seu id.

### API

#### Rotas públicas

- POST "/user" - permite cadastro de um novo usuário.
- POST "/login" - realiza o login de um usuário no sistema.

#### Rotas privadas

- GET "/marvel" - busca uma lista de dados de characters ou comics da API da marvel.
- GET "/marvel/:id" - busca um determinado character ou comic por seu id.

- GET "/user" - recupera dados de um determinado usuário.
- PUT "/user" - edita dados de um usuário.

- POST "/favorite" - cria um novo character ou comic favorito.
- GET "/favorite" - recupera uma lista de characters e comics favoritos.
- DELETE "/favorite" - remove um favorito ou comic dos favoritos de um usuário.
