#   Desenvolvimento de API 


<p> Como parte do módulo 4, da formação de desenvolvimento Web full-stack da Resilia Educação, foi requerido a construção de uma API rest que deveria utilizar os padrões de MVC, os verbos HTTP e operações de CRUD. Para cada grupo foi designado um tema e cada integrante ficou responsável por uma entidade do respectivo tema. Logo, esse projeto trabalha com o tema restaurante mas a entidade encontrada nessa API é de funcionários. </p> 


## Ferramentas utilizadas:

Para o desenvolvimento foi utilizado JavaScript com NodeJS como linguagem da aplicação e o Express como framework, além do banco de dados relacional SQLite e o Insonia. 
## Dependencias de desenvolvimento: 
````js
"dependencies": {
    "express": "^4.17.3",
    "nodemon": "^2.0.15",
    "path": "^0.12.7",
    "sqlite3": "^5.0.2",
    "url": "^0.11.0"
  }
  ````

  ## Inicialização da aplicação via terminal: 
 
 Para inicio da aplicação basta abrir o terminal na pasta do projeto ou executar o código abaixo.
 ````
npm start

````

## Rotas da aplicação: 

[GET] /funcionarios - A rota vai exibir todos os funcionários previamente cadastrados. 

[GET] /funcionarios/:id - A rota lista o funcionário baseado no ID. 

[POST] /funcionarios/post - A rota cria um novo funcionário com as informações passadas no body da requisição. 

Exemplo de criação: 
````
{   
   "id:" 8,
   "nome": "Ivy",
   "sobrenome": "Richa",
   "email": iricha@gmail.com,
    "cpf": 18763896508,
    "turno": "Noite",
    
}

````

[PUT] /funcionarios/:id - A rota deve atualizar as informações de funcionários já cadastrados previamente.

[DELETE] /funcionarios/:id - A rota deve deletar um funcionário baseado no ID do mesmo. 



## Rodando o projeto: 

Pré-requisitos:
Antes de começar, você precisará instalar em sua máquina as seguintes ferramentas: Git, Node.js e Insomnia.

Além disso, é aconselhável ter um editor como o VSCode ou Sublime para trabalhar com o código!

```` 
# Clone este repositório
$ git clone https://github.com/Ivyrch/API_node.js-funcionarios.git

# Acesse a pasta do projeto no terminal
$ cd API_node.js-funcionarios



