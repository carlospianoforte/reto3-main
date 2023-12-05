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
    validate: {
      min: {
        args: [0],
        msg: 'La edad debe ser mayor o igual a 0',
      },
      max: {
        args: [30],
        msg: 'La edad no puede ser mayor a 30',
      },
    },
  },

  sex: {
    allowNull: false,
    type: DataTypes.ENUM('masculino', 'femenino') // Utilizando ENUM para limitar a dos valores posibles
  },

  date: {
    allowNull: false,
    type: DataTypes.DATE // Cambiado a DataTypes.DATE para almacenar fechas
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