const mongoose = require('mongoose')


function connect(){
    mongoose
    .connect("mongodb://localhost/mgeek", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Conectado com ao mongo, Banco "Loja Geek Master" ');
    })
    .catch((erro) => {
      console.log(`Houve um erro inesperado: ${erro}`);
    });
}

module.exports = connect()