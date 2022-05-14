const { Note } = require("../models");

const notedata = [
  {
    note_text:
      "Pug jianbing microdosing woke godard, blog tacos synth post-ironic kale chips poutine shabby chic snackwave lomo echo park.",
    user_id: 1,
    appointment_id: 1,
  },
  {
    note_text:
      "Occupy roof party keytar drinking vinegar echo park everyday carry. Ethical butcher authentic gluten-free, man braid iceland echo park lumbersexual la croix tumblr chartreuse. ",
    user_id: 2,
    appointment_id: 2,
  },
  {
    note_text:
      "Microdosing edison bulb etsy cronut, photo booth authentic succulents fingerstache godard venmo viral master cleanse kitsch waistcoat before they sold out. ",
    user_id: 3,
    appointment_id: 3,
  },
  {
    note_text:
      "Migas yuccie tumblr bespoke chia echo park. Occupy sriracha chicharrones, raclette umami blue bottle cronut drinking vinegar viral vexillologist ",
    user_id: 4,
    appointment_id: 4,
  },
  {
    note_text:
      "ingle-origin coffee offal, photo booth bitters chicharrones artisan roof party jean shorts fanny pack everyday carry. Wolf four loko hammock kogi keffiyeh tote bag gluten-free echo park. ",
    user_id: 5,
    appointment_id: 5,
  },
  {
    note_text:
      "  plant retro taxidermy brunch waistcoat. Green juice succulents cornhole, iPhone narwhal farm-to-table authentic portland kinfolk selfies.",
    user_id: 6,
    appointment_id: 6,
  },
];

const seedNotes = () => Note.bulkCreate(notedata);

module.exports = seedNotes;
