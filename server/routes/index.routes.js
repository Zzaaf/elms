const router = require('express').Router();
const xlsxRouter = require('./xlsx.routes');

router.use('/xlsx', xlsxRouter);

module.exports = router;
