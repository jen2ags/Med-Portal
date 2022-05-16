const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Doctor extends Model {}

Doctor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        doctor_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'doctor'
    }
);

module.exports = Doctor;