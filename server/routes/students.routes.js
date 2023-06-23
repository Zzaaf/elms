const router = require('express').Router();

const studentUpdateController = require('../controllers/students/updateStudent');
const addDiplomaController = require('../controllers/students/addDiploma');
const allStudentsController = require('../controllers/students/allStudents');

router.put('/update/:id', studentUpdateController);
router.post('/diploma', addDiplomaController);
router.get('/all', allStudentsController);

module.exports = router;
