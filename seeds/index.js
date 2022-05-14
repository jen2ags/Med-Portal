const seedUsers = require("./user-seeds");
// const seedAppointment = require("./appointment-seeds");
const seedNotes = require("./note-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");
  await seedUsers();
  console.log("--------------");

  //   await seedAppointment();
  //   console.log("--------------");

  await seedNotes();
  console.log("--------------");

  process.exit(0);
};

seedAll();
