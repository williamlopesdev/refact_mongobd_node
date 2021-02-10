const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Mensagem = new Schema({

    nome:{
        type: String,
        required: true
    },

    mensagem:{
        type: String,
        required: true
        },
})
mongoose.model('mensagens', Mensagem)
