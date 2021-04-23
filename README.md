<h1 align="center">
	<img alt="logo" src=".github/logo.jpg" width="1000px" />
  
</h1>

<h2 align="center">
  NLW #05
</h2>
<h3 align="center">
 Trilha NodeJS
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/ggibamede/nlw-5-nodeJS">

  <a href="https://www.linkedin.com/in/eliasgcf/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Gilberto%20Medeiros-gree">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ggibamede/nlw-5-nodeJS">

  <a href="https://github.com/EliasGcf/readme-template/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ggibamede/nlw-5-nodeJS">
  </a>

  <a href="https://github.com/EliasGcf/readme-template/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/ggibamede/nlw-5-nodeJS">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/ggibamede/nlw-5-nodeJS">
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalacão">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>


## 👨🏻‍💻 Sobre o projeto

- <p style="color: red;">Sistema de chat criado utilizando a biblioteca Socket.io para simular um atendimento com a conexão Cliente - Atendente</p>



## 🚀 Tecnologias

As tecnologias usadas no projeto foram : 

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [Socket.io](https://www.npmjs.com/package/socket.io)
- [SQLite](https://www.npmjs.com/package/sqlite3)

## 💻 Instalacão

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/ggibamede/nlw-5-nodeJS.git && cd nlw-5-nodeJS
```

**Siga os passos abaixo**

```bash
# Instale as dependências do projeto
$ yarn
# Inicie o banco de dados
$ yarn typeorm migration:run
# Inicie a API
$ yarn dev
```
