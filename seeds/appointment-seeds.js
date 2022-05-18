const { Appointment } = require("../models");

const appointmentdata = [
  {
    date_time: "5/16 10:00 AM",
    patient_id: 1,
    doctor_id: 3,
  },
  {
    date_time: "5/16 10:00 AM",
    patient_id: 2,
    doctor_id: 1,
  },
  {
    date_time: "5/16 10:00 AM",
    patient_id: 3,
    doctor_id: 2,
  },
  {
    date_time: "5/16 10:00 AM",
    patient_id: 4,
    doctor_id: 2,
  },
  {
    date_time: "5/16 10:00 AM",
    patient_id: 5,
    doctor_id: 1,
  },
  {
    date_time: "5/16 10:00 AM",
    patient_id: 6,
    doctor_id: 3,
  },
  {
    date_time: "5/16 11:00 AM",
    patient_id: 7,
    doctor_id: 1,
  },
  {
    date_time: "5/20 12:00 PM",
    patient_id: 8,
    doctor_id: 2,
  },
  {
    date_time: "5/21 1:00 PM",
    patient_id: 9,
    doctor_id: 3,
  },
];

const seedAppointment = () => Appointment.bulkCreate(appointmentdata);

module.exports = seedAppointment;
