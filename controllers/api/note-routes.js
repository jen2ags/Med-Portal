const router = require('express').Router();
const { Note } = require('../../models');

router.get('/', (req, res) => {
  Note.findAll()
    .then(dbNoteData => res.json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects => {note_text: "This is the note", user_id: 1, appointment_id: 2}
  Note.create({
    note_text: req.body.note_text,
    user_id: req.session.user_id,
    appointment_id: req.body.appointment_id
  })
    .then(dbNoteData => res.json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Note.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbNoteData => {
      if (!dbNoteData) {
        res.status(404).json({ message: 'No note found with this id!' });
        return;
      }
      res.json(dbNoteData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;