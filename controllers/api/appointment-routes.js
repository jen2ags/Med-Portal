const router = require('express').Router();
const withAuth = require('../../utils/auth.js');
const { Appointment, User, Note } = require('../../models');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Appointment.findAll({
    attributes: [
      'id',
      'title',
      'date',
      'time',
      'created_at'
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
      }
    ]
  })
    .then(dbAppointmentData => res.json(dbAppointmentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Appointment.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'date',
      'time',
      'created_at'
      
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
      }
    ]
  })
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

router.post('/', withAuth, (req, res) => {
  // expects {title: 'Albert Rojas', date: '3/23/2020',time: '12:00', user_id: 1}
  Appointment.create({
    title: req.body.title,
    date: req.body.date,
    time: req.body.time,
    user_id: req.session.user_id
  })
    .then(dbAppointmentData => res.json(dbAppointmentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.put('/:id', withAuth, (req, res) => {
  Appointment.update(
    {
      title: req.body.title,
      date: req.body.date,
      time: req.body.time
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

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Appointment.destroy({
    where: {
      id: req.params.id
    }
  })
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