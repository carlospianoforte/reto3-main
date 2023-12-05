const { Pool } = require('pg');
const config = require('../config/db_config');

const pool = new Pool(config);

const { models } = require('../db/sequelize')

class Cardservice {

  async getCards()
  {
    const Cards = await models.Cards.findAll();
    return Cards
  }

  async saveNewcard(name,age, sex, date, description)
  {
    const cardCreated = await models.Cards.create({
      name: name,
      age: age,
      sex: sex,
      date: date,
      description: description
    })

    console.log(cardCreated)

  }

  async updatecard(cardId, name, age, sex, date, description)
  {
    const card = await models.Cards.findByPk(cardId)

    if (!card)
    {
      throw new Error("card not found")
    }

    await card.update({
      name: name,
      age: age,
      sex: sex,
      date: date,
      description: description
    })
    
  }
  
  async upsertcard(cardId, name, age, sex, date, description)
  {
    const card = await models.Cards.findByPk(cardId)
    
    if (!card)
    {
      this.saveNewcard(name, age, sex, date, description)
    }
    
    await card.update({
      name: name,
      age: age,
      sex: sex,
      date: date,
      description: description
    })
  }

  async deletecard(cardId)
  {
    const prodctToDelete = await models.Cards.findByPk(cardId)
    prodctToDelete.destroy()
  }
}

module.exports = Cardservice