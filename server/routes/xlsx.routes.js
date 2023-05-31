const router = require('express').Router();
const getUsersXlsx = require('../controllers/xlsx/getUsersXlsx');

router.get('/', getUsersXlsx);

module.exports = router;
