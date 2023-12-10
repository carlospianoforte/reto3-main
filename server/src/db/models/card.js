const { Model, DataTypes } = require('sequelize')

const CARD_TABLE = 'CARDS'

const CardSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING 
  },

  age: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  sex: {
    allowNull: false,
    type: DataTypes.STRING
  },

  date: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING,
    validate: {
      len: [0, 200]
    }
  }
}

class Card extends Model
{
  static associate() {}

  static config(sequelize) 
  {
    return {
      sequelize,
      tableName: CARD_TABLE,
      modelName: 'Cards',
      timestamps: false
    }
  }
}

module.exports = { CARD_TABLE: CARD_TABLE, CardSchema, Card}