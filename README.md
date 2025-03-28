# SNOOPY PetShop Delivery API
Situação de Aprendizagem - Back-End (Node.JS, JavaSript, VsCode, ORM Prisma, Insomnia)
## Contextualização
SNOOPY PetShop tem atuado em nossa cidade com ótimo atendimento e agilidade, é nosso cliente e necessita de um sistema Web para registro das entregas ou serviços a domicílio, como busca de animais para banho, tosa e outros serviços.<br>O P.O. após uma visita ao cliente elaborou o DER e UML DC(Diagrama de Classes) a seguir e elencou os requisitos funcionais.<br>
![DER e DC](./docs/snoopy-der-dc.png)
## Desafio
Desenvolver as funcionalidades conforme requisitos

### Requisitos funcionais
- [RF001] O sistema deve permitir o CRUD de Motoristas.
    - [RF001.1] Um motorista pode possuir mais de um telefone ou nenhum, desta forma o campo telefones deve ter espaço suficiente para cadastrar vários números (255 caracteres) e permitir nulo.
    - [RF001.2] A rota **readOne** do motorista deve mostrar os dados de um cliente específico e seus pedidos.
- [RF002] O sistema deve permitir o CRUD de pedidos.
    - [RF002.1] O sistema deve associar o pedido a um motorista.
    - [RF002.1] O Pedido deve na rota **read** deve somar o total dos **valores**.

### Casos de teste (Insomnia)
- [CT001] Deve ser cadastrado pelo menos 5 motoristas.
- [CT002] Deve ser cadastrado 1 telefone para cada motorista.
    - [CT002.1] Pelo menos 1 motorista não deve ter telefone cadastrado, ou seja **nulo**.
- [CT003] Cadastre, altere e exclua um motorista.
- [CT004] Cadastre um pedido para cada motorista.
    - [CT004.1] Pelo menos um motorista deve ter dois ou mais pedidos cadastrados.
- [CT005] Cadastre, altere e exclua um pedido.


Pedidos.png
Motoristas.png)


## Tecnologias
- Node.js
- Prisma
- XAMPP
- MySQL
- VSCode
- Insomnia

## Passo a Passo de como executar a API

### 1. Instale as dependências
Clone o repositório:
```sh
git clone https://github.com/Gabihdemori/pbe2-vps01-snoopy-delivery-2025.git
```

### 2. Abra o XAMPP Control Panel e inicie o MySQL

### 3. Abra o repositório com VSCode

### 4. Crie o arquivo `.env` na pasta API e adicione a variável de ambiente:
```sh
DATABASE_URL="mysql://root@localhost:3306/snoop?schema=public&timezone=UTC"
```

### 5. Abra o terminal, navegue até a pasta API e execute os comandos
#### Instale as dependências do projeto:
```sh
npm install
```

#### Gere o cliente Prisma:
```sh
npx prisma generate
# ou
prisma generate
```

#### Execute as migrações para criar as tabelas no banco de dados:
```sh
npx prisma migrate dev --name init
# ou
prisma migrate dev --name init
```

### 6. Inicie o servidor
Para iniciar o servidor da API, use o comando:
```sh
npm start
```
O servidor estará rodando em [http://localhost:3001](http://localhost:3001)

### 7. Teste os endpoints
Abra o Insomnia ou qualquer outra ferramenta de teste de API e crie uma nova requisição para testar os seguintes endpoints:

- **POST /tasks**: Criar uma nova tarefa.
- **GET /tasks**: Listar todas as tarefas.
- **DELETE /tasks/{id}**: Deletar uma tarefa.

### 8. Parar o servidor
Para parar o servidor, pressione `Ctrl + C` no terminal.
