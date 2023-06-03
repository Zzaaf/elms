const router = require('express').Router();

const registrationControllers = require('../controllers/auth/registration');
const confirmationControllers = require('../controllers/auth/confirmationRegistration');
const loginControllers = require('../controllers/auth/login');
const logoutControllers = require('../controllers/auth/logout');

router.post('/registration', registrationControllers);
router.put('/registration/confirmation/:authenticationUrl', confirmationControllers);
router.post('/login', loginControllers);
router.get('/logout', logoutControllers);

module.exports = router;
