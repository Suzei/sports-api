const mongoose = require ('mongoose') 

const Player = mongoose.model('Player', { // exportando os dados e criando um modelo
  name: String,
  team: String, 
  approved: Boolean

})

module.exports = Player