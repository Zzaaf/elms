const router = require('express').Router();

const studentUpdateController = require('../controllers/students/updateStudent');
const addDiplomaController = require('../controllers/students/addDiploma');

router.put('/update/:id', studentUpdateController);
router.post('/diploma', addDiplomaController);

module.exports = router;
