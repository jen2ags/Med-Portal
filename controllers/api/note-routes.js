const router = require('express').Router();
const { Note } = require('../../models');
const withAuth = require('../../utils/auth.js');

router.get('/', (req, res) => {
  Note.findAll()
    .then(dbNoteData => res.json(dbNoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  if (req.session) {
    Note.create({
      note_text: req.body.note_text,
      appointment_id: req.body.appointment_id
    })
      .then(noteData => res.json(noteData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.delete('/:id', withAuth, (req, res) => {
  Note.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbNoteData => {
      if (!dbNoteData) {
        res.status(404).json({ message: 'No notes found with this id!' });
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
