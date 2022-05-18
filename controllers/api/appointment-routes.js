const router = require('express').Router();
const withAuth = require('../../utils/auth.js');
const { Appointment, User, Note, Doctor, Patient } = require('../../models');

router.get('/', (req, res) => {
  console.log('======================');
  Appointment.findAll({
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
  Appointment.create({
    date_time: req.body.date_time,
    patient_id: req.body.patient_id,
    doctor_id: req.body.doctor_id
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
      date_time: req.body.date_time,
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

router.delete('/:id', withAuth, (req, res) => {
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