const { Appointment } = require("../models");

const appointmentdata = [
  {
    title: "Patient name",
    date_time: "5/16 10:00 AM",
    user_id: 1,
    patient_id: 1,
    doctor_id: 1,
  },
  {
    title: "Patient name",
    date_time: "5/16 10:00 AM",
    user_id: 2,
    patient_id: 1,
    doctor_id: 2,
  },
  {
    title: "Patient name",
    date_time: "5/16 10:00 AM",
    user_id: 3,
    patient_id: 1,
    doctor_id: 3,
  },
  {
    title: "Patient name",
    date_time: "5/16 10:00 AM",
    user_id: 4,
    patient_id: 1,
    doctor_id: 4,
  },
  {
    title: "Patient name",
    date_time: "5/16 10:00 AM",
    user_id: 5,
    patient_id: 1,
    doctor_id: 5,
  },
  {
    title: "Patient name",
    date_time: "5/16 10:00 AM",
    user_id: 6,
    patient_id: 1,
    doctor_id: 6,
  },
];

const seedAppointment = () => Appointment.bulkCreate(appointmentdata);

module.exports = seedAppointment;
