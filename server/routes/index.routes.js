const router = require('express').Router();
const xlsxRouter = require('./xlsx.routes');
const authRouter = require('./auth.routes');

router.use('/auth', authRouter);
router.use('/xlsx', xlsxRouter);

module.exports = router;
