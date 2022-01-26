# csv-rest-client

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
  "author": {
    "id": "author.id",
    "name": "author.name"
  }
}
```

Exemplo de csv:

```csv
id;title;author.id;author.name
2;Apple;3;Daniel
3;Lemon;4;Fernando
4;Strawberry;5;Jefferson
```

Exemplo de uma linha dos dados mapeada:

```json
{
  "id": 2,
  "title": "Apple",
  "author": {
    "id": 3,
    "name": "Daniel"
  }
}
```

### Arquivo

É um input do tipo file onde você poderá selecionar o arquivo a ser enviado na API