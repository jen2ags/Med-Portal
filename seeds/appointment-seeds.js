const { Appointment } = require("../models");

const appointmentdata = [
  {
    title: "IBS issues",
    date: "2022-06-22",
    time: "11:00AM",
    user_id: 1,
    doctor_id: 1,
  },
  {
    title: "Sinus issues",
    date: "2022-06-22",
    time: "12:00AM",
    user_id: 2,
    doctor_id: 2,
  },
  {
    title: "Reproductive issues",
    date: "2022-06-22",
    time: "10:00AM",
    user_id: 3,
    doctor_id: 3,
  },
  {
    title: "Knee issues",
    date: "2022-06-22",
    time: "01:00AM",
    user_id: 4,
    doctor_id: 4,
  },
  {
    title: "Flea issues",
    date: "2022-06-22",
    time: "02:00AM",
    user_id: 5,
    doctor_id: 5,
  },
  {
    title: "Ear issues",
    date: "2022-06-22",
    time: "03:00AM",
    user_id: 6,
    doctor_id: 6,
  },
];

const seedAppointment = () => Appointment.bulkCreate(appointmentdata);

module.exports = seedAppointment;
