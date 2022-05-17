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
        attributes: [
          'id',
          'note_text',
          'appointment_id',
          'user_id',
          'created_at',
        ],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
      {
        model: Doctor,
        attributes: ['doctor_name'],
      },
    ],
  })
    .then((dbPostData) => {
      const appointments = dbPostData.map((appointment) =>
        appointment.get({ plain: true })
      );

      res.render('homepage', {
        appointments,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/appointment/:id', (req, res) => {
  Appointment.findOne({
    where: {
      id: req.params.id,
    },
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
        model: User,
        attributes: ['username'],
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

router.get('/editNote/:id', withAuth, (req, res) => {
  Note.findByPk(req.params.id, {
    attributes: ['id', 'note_text', 'appointment_id', 'created_at'],
  })
    .then((dbPostData) => {
      if (dbPostData) {
        const note = dbPostData.get({ plain: true });

        res.render('edit-note', {
          note,
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
