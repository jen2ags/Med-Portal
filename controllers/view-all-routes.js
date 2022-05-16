const router = require('express').Router();
const sequelize = require('../config/connection');
const { Appointment, Note, User, Doctor } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
    console.log('======================');
    Appointment.findAll({
      attributes: [
        'id',
        'title',
        'date',
        'time',
        'user_id',
        'doctor_id',
        'created_at',
      ],
      include: [
        {
          model: Note,
          attributes: ['id', 'note_text', 'appointment_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Doctor,
          attributes: ['doctor_name']
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