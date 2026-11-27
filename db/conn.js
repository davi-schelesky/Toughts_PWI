const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: '../storage/database.sqlite',
    logging: false
})

try {
    sequelize.authenticate();
    console.log(`Conectado com sucesso ao SQLite!`);
} catch (error) {
    console.log(`Não foi possível conectar, erro: ${error}`);
}

module.exports = sequelize;