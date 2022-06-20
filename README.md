<p align="center">
  <h1 align="center">API REST - BridgeHub</h1>
</p>  


# Sobre

API Rest criada como parte do processo seletivo proposto pela BridgeHub!

### O que deveria ser desenvolvido

Uma API para cadastro de usuario (nome, email e telefone) com CRUD completo!

### Regras de negócio

1 - “/add_user/“ - Nesse Enpoint deverá ser criado um usuário | dados do usuário: nome, email, telefone<br>
2 - “/users/" - Nesse Endpoint é preciso listar os usuários que foram cadastrados na plataforma com todos os seus dados<br>
3 - “/users/id” - Nesse Endpoint é preciso consultar um usuário especifico com todos os seus dados<br>
4 - “/edit_user/id“ - Nesse Endpoint deverá ser possível editar um usuário, isto é, editar o nome e/ou e-mail e/ou telefone<br>
5 - “/delete_user/” - Nesse Endpoint deverá ser possível excluir um usuário do banco de dados<br>
<br>
O Candidato poderá utilizar qualquer banco de dados desde que seja indicado qual banco foi utilizado<br>
<br>
O candidato deverá disponibilizar um link do deploy no qual eu possa testar e checar quais requisitos foram atendidos pela API desenvolvida, OU deverá escrever um README com a maior quantidade de detalhes possíveis para que eu possa testar o que foi criado<br>

# Pré-requisitos:

### Instalando e executando a API localmente:

Você precisará instalar em seu PC: <br>

[Git](https://git-scm.com) ✔ <br>
[Node.js](https://nodejs.org/en/) ✔ <br>
[Insomnia](https://insomnia.rest/download) ✔ <br>
[VSCode](https://code.visualstudio.com/) ✔ <br>

# Passo a Passo
## no terminal digite os comandos:

1 - git clone https://github.com/jonatastalves/API-BridgeHub-Process.git<br>
2 - cd API-BridgeHub-Process<br>
3 - npm install: Para instalar as dependencias necessárias para rodar o projeto<br>
4 - npm start: Para iniciar o Projeto<br>
5 - testar as rotas usando o Insomnia<br>

### Executando a API pelo Heroku:

Você usará como rota o link informado:

https://api-bridgehub.herokuapp.com/


# Rota da API

## Endereço

<b>[POST] </b> “/add_user/“ - A rota enviará os dados necessários para cadastrar o usuário, caso seja bem sucedida retornará a o mesmo através do status 201. <br>
<b>[GET] </b> “/users/“ - Este Endpoint é responsável por listar os usuários cadastrados na plataforma com todos os seus dados <br>
<b>[GET] </b> “/users/:id“ - Este Endpoint é responsável por listar um usuário específico cadastrado na plataforma através de seu id<br>
<b>[PUT] </b> “/edit_user/:id“ - Este Endpoint é responsável por editar um usuário específico, através do ID, cadastrado na plataforma através, isto é, editar o nome e/ou e-mail e/ou telefone <br>
<b>[DELETE] </b> “/delete_user/:id“ - Este Endpoint é responsável por deletar um usuário específico, através do ID, cadastrado na plataforma<br>


### Schema da requisição 

```javascript

{
    "nome": "Jonatas",
    "email": "jonatas@emailqualquer.com",
	"telefone": 2132323232
}
```

