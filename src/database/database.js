const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb+srv://apielgeladon:admin@api-elgeladon.krhhh.mongodb.net/paletas-db?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB Conectado!');
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
};

module.exports = connectToDatabase;
