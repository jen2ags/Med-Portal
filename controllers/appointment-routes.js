const router = require('express').Router();
const sequelize = require('../config/connection');
const { Appointment, User, Doctor, Note, Patient } = require('../models');
const withAuth = require('../utils/auth.js');

router.get('/', withAuth, (req, res) => {
  Patient.findAll({
    attributes: ['id', 'patient_name']
})
    .then(dbPostData => {
        //serialize data before passing to template
        const patients = dbPostData.map(patient => patient.get({ plain: true }));
        res.render('appointment', { patients, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
});

router.get('/edit/:id', withAuth, (req, res) => {
    Appointment.findByPk(req.params.id, {
      attributes: [
        'id',
        'date_time',
        'patient_id',
        'doctor_id',
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
        if (dbPostData) {
          const appointment = dbPostData.get({ plain: true });
          
          res.render('edit-appointment', {
            appointment,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  router.put('/:id', withAuth, (req, res) => {
    Appointment.update(
      {
        date_time: req.body.date_time,
        patient_id: req.body.patient_id,
        doctor_id: req.body.doctor_id
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbAppointmentData => {
        if (!dbAppointmentData) {
          res.status(404).json({ message: 'No appointment found with this id' });
          return;
        }
        res.json(dbAppointmentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;