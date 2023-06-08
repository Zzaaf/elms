const router = require('express').Router();
const xlsxRouter = require('./xlsx.routes');
const authRouter = require('./auth.routes');
const studentsRouter = require('./students.routes');

router.use('/auth', authRouter);
router.use('/xlsx', xlsxRouter);
router.use('/students', studentsRouter);

module.exports = router;
