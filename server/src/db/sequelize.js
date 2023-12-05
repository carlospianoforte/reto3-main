const { Sequelize } = require('sequelize');
const setupModels = require('./init.db');
const config = require('../config/db_config');

const USER = encodeURIComponent(config.user);
const PASSWORD = encodeURIComponent(config.password);

const URI = `postgres://${USER}:${PASSWORD}@${config.host}:${config.port}/${config.database}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: (message) => console.log(`[sequelize] : ${message}`)
});

setupModels(sequelize)

sequelize.sync({
  alter: true,
  logging: (message) => console.log(`[SYNC] : ${message}`)
})

module.exports = sequelize