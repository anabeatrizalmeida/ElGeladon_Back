const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb+srv://databasepaletas:190706@cluster0.60dd0.mongodb.net/paletas-db?retryWrites=true&w=majority', {
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
