const { Doctor } = require("../models");

const doctordata = [
  {
    doctor_name: "Jeff Carter, FNP"
  },
  {
    doctor_name: "Sheila Douglas, MD"
  },
  {
    doctor_name: "Karen Gonzalez, FNP"
  }
];

const seedDoctors = () => Doctor.bulkCreate(doctordata);

module.exports = seedDoctors;
