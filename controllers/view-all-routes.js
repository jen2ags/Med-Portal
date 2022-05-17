const router = require('express').Router();
const sequelize = require('../config/connection');
const { Appointment, Note, User, Doctor, Patient } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
    console.log('======================');
    Appointment.findAll({
      attributes: [
        'id',
        'date_time',
        'doctor_id',
        'patient_id',
        'created_at',
      ],
      include: [
        {
          model: Note,
          attributes: ['id', 'note_text', 'appointment_id', 'created_at'],
          include: {
            model: Appointment,
            attributes: ['date_time']
          }
        },
        {
          model: Doctor,
          attributes: ['doctor_name']
        },
        {
          model: Patient,
          attributes: ['patient_name']
        }
      ]
    })
      .then(dbPostData => {
        const appointments = dbPostData.map(appointment => appointment.get({ plain: true }));
  
        res.render('homepage', {
          appointments,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;