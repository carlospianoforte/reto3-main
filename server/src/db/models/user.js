const { Model, DataTypes } = require('sequelize')

const USER_TABLE = 'USERS'

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'admin'
    }
}

class User extends Model {
    static associate() { }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'Users',
            timestamps: false
        }
    }
}

module.exports = { USER_TABLE, UserSchema, User }