const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')


app.use(express.json())
app.use(cors())

require('./src/models/Mensagem')
const Mensagem = mongoose.model('mensagens')

require('./src/db/connect')


app.get('/mensagens', async(req, res)=> {
    const mensagensResponse = await Mensagem.find()
    const mensagensJson = await mensagensResponse

    return res.json(mensagensJson)
})


app.post('/mensagens', async (req, res)=>{
    const novaMensagem = new Mensagem({
        nome: req.body.nome,
        mensagem: req.body.mensagem
    })

    novaMensagem.save()

    res.json({message: "Mensagem enviada com sucesso", mensagem: novaMensagem})
})


app.listen(4000)