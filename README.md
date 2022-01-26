# csv-rest-client

## Como executar?

1. Coloque o arquivo csv no diretório deste projeto
2. Ajuste as variáveis do arquivo config.json
3. Abra o terminal na pasta que está o projeto
4. Instale as dependências usando o comando `npm install`
5. Execute na linha de comando: `node index.js`

## Informações complementares

### URL

É a URL da api que você está tentando enviar um arquivo

### Método HTTP

É o método http que irá ser utilizado ao realizar o request: `get`, `post`, `put`, `patch`, `delete`

### API token

É o token de autenticação que será enviado no header da sua requisição

### Mapeamento de colunas

É onde deve ser especificado o json a ser enviado na request e de qual coluna do csv ele irá buscar a informação a ser
enviada

> Ainda não é permitido lista de dados aninhadas

Exemplo de mapeamento:

```json
{
  "id": "id",
  "title": "title",
  "category": {
    "id": "category.id",
    "title": "category.title"
  }
}
```

Exemplo de csv:

```csv
id;title;category.id;category.title
2;Keyboard;3;Computador
3;Lemon;4;Fruta
4;Strawberry;5;Fruta
```

Exemplo de uma linha dos dados mapeada:

```json
{
  "id": 2,
  "title": "Keyboard",
  "category": {
    "id": 3,
    "title": "Computador"
  }
}
```

### Arquivo

É um input do tipo file onde você poderá selecionar o arquivo a ser enviado na API