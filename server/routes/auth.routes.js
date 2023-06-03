const router = require('express').Router();

const registrationController = require('../controllers/auth/registration');
const confirmationController = require('../controllers/auth/confirmationRegistration');
const loginController = require('../controllers/auth/login');
const logoutController = require('../controllers/auth/logout');

router.post('/registration', registrationController);
router.put('/registration/confirmation/:authenticationUrl', confirmationController);
router.post('/login', loginController);
router.get('/logout', logoutController);

module.exports = router;
