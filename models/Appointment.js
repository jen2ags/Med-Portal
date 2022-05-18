const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appointment extends Model {}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date_time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    patient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'patient',
        key: 'id'
      }
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'doctor',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'appointment'
  }
);

module.exports = Appointment;
