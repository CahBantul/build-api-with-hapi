const { addNoteHandler } = require('./handler');

const router = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];

module.exports = router;
