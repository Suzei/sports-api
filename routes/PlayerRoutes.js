const router = require('express').Router() 
// usando o Router do Express para indicar uma rota
const Player = require('../models/Player') 
// usando o path de Player, nossas informações que se transformam num model

router.post('/', async (req, res) => { 
  // um verbo post, para criar dados novos 

    const { name, team, approved } = req.body 
    // falando que os dados de const estão na requisição do body

  const player = { 
    // listando os dados de player por aqui
    name, 
    team, 
    approved
  }

  if (!name || !team || !approved) {
    res.status(422).json({message: 'O nome é obrigatório'}) 
    // se não tiver nome, mande uma mensagem
  }

  try {
    
    await Player.create(player) 
    // cria uma coluna via mongoose com os dados passados em player
    res.status(201).json({message: 'Jogador adicionado com sucesso'})
    // mensagem criada quando se adiciona via post
  } 
  
  catch (error) {
    res.status(500).json({error: error})
  }

})

// consultar dados

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

// consultar apenas um dado, pelo ID passado

router.get('/:id', async (req,res) => {
  const id = req.params.id

  try {
  const player = await Player.findOne({_id: id}) 
  res.status(200).json(player)   
  } catch (error) {
    res.status(500).json({error: error})

  }
})

// modificar ou atualizar um dado

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