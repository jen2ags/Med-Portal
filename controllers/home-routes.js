const router = require('express').Router();
const sequelize = require('../config/connection');
const { Appointment, Note, User, Doctor } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('req.session');
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
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(appointment => appointment.get({ plain: true }));

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
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




module.exports = router;