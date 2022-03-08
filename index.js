const express = require('express') 
// importação do express
const app = express() 
// falando que o app é uma função do express, para que não precisemos escrever express().algo
const mongoose = require('mongoose') 
// moongose, que vai interagir com o mongodb atlas

const dotenv = require('dotenv')

dotenv.config()

//forma de ler JSON

app.use( 
  // middleware que vai configurar os dados postos pelo JSON
  express.urlencoded({
    extended: true
  })
)

app.use(express.json()) 
// o express vai consumir json

// rota inicial

const playerRoutes = require('./routes/PlayerRoutes') 
// importando as rotas de PlayerRoutes

app.use('/player', playerRoutes) 
// utilizando playerRoutes e passando a rota que ele irá "rodar"

// configurando o user do mongoDb

// ponto o pass
let URL = process.env.MONGO_ATLAS
// entrar em uma porta

mongoose.connect(URL) 
// usando a rota de configuração connect do mongoose, para fazer conexão com o atlas
.then(() => { // e aí
  app.listen(3000) // rodando na rota 3000
})
.catch((err) => console.log(err)) 
// mas se não funcionar, dê um erro indicando o erro
