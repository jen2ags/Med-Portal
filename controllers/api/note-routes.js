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

router.post('/', withAuth, (req, res) => {
  //check the session
  if (req.session) {
    // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
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
