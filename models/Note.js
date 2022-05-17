const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    note_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appointment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'appointment',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'note'
  }
);

module.exports = Note;
