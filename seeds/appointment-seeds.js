const { Appointment } = require("../models");

const appointmentdata = [
  {
    date_time: "5/16 10:00 AM",
    user_id: 1,
    patient_id: 1,
    doctor_id: 1,
  },
  {
    date_time: "5/16 10:00 AM",
    user_id: 2,
    patient_id: 1,
    doctor_id: 2,
  },
  {
    date_time: "5/16 10:00 AM",
    user_id: 3,
    patient_id: 1,
    doctor_id: 3,
  },
  {
    date_time: "5/16 10:00 AM",
    user_id: 4,
    patient_id: 1,
    doctor_id: 4,
  },
  {
    date_time: "5/16 10:00 AM",
    user_id: 5,
    patient_id: 1,
    doctor_id: 5,
  },
  {
    date_time: "5/16 10:00 AM",
    user_id: 6,
    patient_id: 1,
    doctor_id: 6,
  },
];

const seedAppointment = () => Appointment.bulkCreate(appointmentdata);

module.exports = seedAppointment;
