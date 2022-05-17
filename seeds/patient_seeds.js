const { Patient } = require("../models");

const patientdata = [
  {
    patient_name: "Bill Jones"
  },
  {
    patient_name: "Mary Parker"
  },
  {
    patient_name: "Tom Edison"
  },
  {
    patient_name: "Anna Gonzalez"
  },
  {
    patient_name: "Abel Ramiro"
  },
  {
    patient_name: "Lisa Patel"
  },
];

const seedPatients = () => Patient.bulkCreate(patientdata);

module.exports = seedPatients;
