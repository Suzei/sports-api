const mongoose = require ('mongoose') 

const Player = mongoose.model('Player', {
  name: String,
  team: String, 
  approved: Boolean

})

module.exports = Player