const Sequelize = require('sequelize')

const sequelize = new Sequelize('softex', 'root', 'mysql', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;