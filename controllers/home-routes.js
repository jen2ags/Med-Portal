const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth.js');
const { Appointment, Note, User, Doctor, Patient } = require('../models');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/view-all');
    return;
  }
  res.render('login');
});

router.get('/appointment/:id', (req, res) => {
  Appointment.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'date_time', 'patient_id', 'doctor_id', 'created_at'],
    include: [
      {
        model: Note,
        attributes: ['id', 'note_text', 'appointment_id', 'created_at'],
        include: {
          model: Appointment,
          attributes: ['date_time'],
        },
      },
      {
        model: Doctor,
        attributes: ['id', 'doctor_name'],
      },
      {
        model: Patient,
        attributes: ['id', 'patient_name'],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No appointment found with this id!' });
        return;
      }

      //serialize the data
      const appointment = dbPostData.get({ plain: true });

      //pass data to template
      res.render('single-appointment', {
        appointment,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/create', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('create');
});

router.get('/getuser', (req, res) => {
  if (req.session.loggedIn) {
    res.status(200).send(req.session.user_id);
  } else {
    res.sendStatus(403);
  }
});

router.get('/new-patient', (req, res) => {
  res.render('new-patient');
});

router.get('/edit-appointment/:id', withAuth, (req, res) => {
  Appointment.findByPk(req.params.id, {
    attributes: ['id', 'date_time', 'patient_id', 'doctor_id', 'created_at'],
    include: [
      {
        model: Note,
        attributes: ['id', 'note_text', 'appointment_id', 'created_at'],
      },
      {
        model: Doctor,
        attributes: ['doctor_name'],
      },
      {
        model: Patient,
        attributes: ['patient_name'],
      },
    ],
  })
    .then((dbPostData) => {
      if (dbPostData) {
        const appointment = dbPostData.get({ plain: true });

        res.render('edit-appointment', {
          appointment,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
