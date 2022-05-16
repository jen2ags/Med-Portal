const sequelize = require("../config/connection");
const { User, Appointment } = require("../models");

const userdata = [
  {
    username: "jackwallace",
    email: "jackwallace@gmail.com",
    password: "abc123",
  },
  {
    username: "ckwallace",
    email: "ckwallace@gmail.com",
    password: "abc123",
  },
  {
    username: "jallace",
    email: "jallace@gmail.com",
    password: "abc123",
  },
  {
    username: "jae",
    email: "jae@gmail.com",
    password: "abc123",
  },
  {
    username: "jace",
    email: "jace@gmail.com",
    password: "abc123",
  },
  {
    username: "lace",
    email: "lace@gmail.com",
    password: "abc123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
