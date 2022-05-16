const router = require('express').Router();
const sequelize = require('../config/connection');
const { Appointment, User, Doctor, Note } = require('../models');
const withAuth = require('../utils/auth.js');

router.get('/', withAuth, (req, res) => {
    Appointment.findAll({
        where: {
            //use the ID from the session
            user_id: req.session.user_id
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
        //serialize data before passing to template
        const posts = dbPostData.map(appointment => appointment.get({ plain: true }));
        res.render('appointment', { posts, loggedIn: true });
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

module.exports = router;