// import all models
const Appointment = require('./Appointment');
const User = require('./User');
const Note = require('./Note');
const Doctor = require('./Doctor');
const Patient = require('./Patient');

// create associations
User.hasMany(Appointment, {
  foreignKey: 'user_id'
});

Appointment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Appointment.belongsTo(Patient, {
  foreignKey: 'patient_id',
  onDelete: 'SET NULL'
});

Patient.hasMany(Appointment, {
  foreignKey: 'patient_id',
  onDelete: 'SET NULL'
});

Appointment.belongsTo(Doctor, {
  foreignKey: 'doctor_id',
  onDelete: 'SET NULL'
});

Doctor.hasMany(Appointment, {
  foreignKey: 'doctor_id',
  onDelete: 'SET NULL'
});

Note.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Note.belongsTo(Appointment, {
  foreignKey: 'appointment_id',
  onDelete: 'SET NULL'
});

User.hasMany(Note, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Appointment.hasMany(Note, {
  foreignKey: 'appointment_id'
});

module.exports = { User, Appointment, Note, Doctor, Patient };
