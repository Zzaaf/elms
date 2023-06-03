const router = require('express').Router();
const xlsxRouter = require('./xlsx.routes');
const authRouters = require('./auth.routers');

router.use('/auth', authRouters);
router.use('/xlsx', xlsxRouter);

module.exports = router;
