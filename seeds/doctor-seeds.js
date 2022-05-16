const { Doctor } = require("../models");

const doctordata = [
  {
    doctor_name: "doctor one"
  },
  {
    doctor_name: "doctor two"
  },
  {
    doctor_name: "doctor three"
  },
  {
    doctor_name: "doctor four"
  },
  {
    doctor_name: "doctor five"
  },
  {
    doctor_name: "doctor six"
  },
];

const seedDoctors = () => Doctor.bulkCreate(doctordata);

module.exports = seedDoctors;
