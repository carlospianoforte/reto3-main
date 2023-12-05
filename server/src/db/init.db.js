// const { Card, CardSchema } = require('./models/Card')
const { Card, CardSchema } = require('./models/card')
const { User, UserSchema } = require('./models/user')

function setupModels(sequelize) {
  // Card.init(CardSchema, Card.config(sequelize))
  Card.init(CardSchema, Card.config(sequelize))
  User.init(UserSchema, User.config(sequelize))
}

module.exports = setupModels