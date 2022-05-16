const router = require('express').Router();
const sequelize = require('../config/connection');
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
      id: req.params.id
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
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No appointment found with this id!' });
        return;
      }

      //serialize the data
      const appointment = dbPostData.get({ plain: true });

      //pass data to template
      res.render('single-appointment', {
        appointment,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
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

router.get('/new-patient', (req, res) => {

  res.render('new-patient');
});


module.exports = router;