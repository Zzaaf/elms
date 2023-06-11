const router = require('express').Router();
const xlsxRouter = require('./xlsx.routes');
const authRouter = require('./auth.routes');
const pdfRouter = require('./pdf.routes');

router.use('/auth', authRouter);
router.use('/xlsx', xlsxRouter);
router.use('/pdf', pdfRouter);

module.exports = router;
