const router = require('express').Router() 
const Player = require('../models/Player') 

router.post('/', async (req, res) => { 

  const { name, team, approved } = req.body 

  const player = { 
    name, 
    team, 
    approved
  }

  if (!name || !team || !approved) {
    res.status(422).json({message: 'O nome é obrigatório'}) 
  }

  try {
    
    await Player.create(player) 
    res.status(201).json({message: 'Jogador adicionado com sucesso'})
  } 
  
  catch (error) {
    res.status(500).json({error: error})
  }

})

router.get('/', async (req,res) => {
  try {
    const players = await Player.find()
    res.status(200).json(players)

  } 
  catch (error) {
    res.status(500).json({error: error})
    return 
  }
} )


router.get('/:id', async (req,res) => {
  const id = req.params.id

  try {
  const player = await Player.findOne({_id: id}) 
  res.status(200).json(player)   
  } catch (error) {
    res.status(500).json({error: error})

  }
})

router.patch('/:id', async (req, res) => {  
  const id = req.params.id
  const {name, team, approved} = req.body

  const player = {
    name, 
    team, 
    approved
  }

  try {
    const updatedPlayer = await Player.updateOne({_id: id}, player)
    res.status(200).json(player)
  } catch (error) {
    console.log('erro')
  }
})

module.exports = router