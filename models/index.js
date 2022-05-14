// import all models
const Appointment = require('./Appointment');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations
User.hasMany(Appointment, {
  foreignKey: 'user_id'
});

Appointment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Appointment.belongsTo(Doctor, {
  foreignKey: 'doctor_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Appointment, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Appointment.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Appointment, Comment };
