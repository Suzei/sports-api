const express = require('express') 
const app = express() 
const mongoose = require('mongoose') 
const dotenv = require('dotenv')
const playerRoutes = require('./src/models/routes/PlayerRoutes')

dotenv.config()
let URL = process.env.MONGO_ATLAS
let PORT = process.env.PORT

app.use(express.urlencoded({extended: true}))
app.use(express.json()) 
app.use('/player', playerRoutes) 


mongoose.connect(URL) 
.then(() => { 
  app.listen(PORT)
})
.catch((err) => console.log(err)) 
