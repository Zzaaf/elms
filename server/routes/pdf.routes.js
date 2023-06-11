const router = require('express').Router();

const getPresentation = require('../controllers/pdf/getPresentation');
const getPresentations = require('../controllers/pdf/getPresentations');
const addPresentation = require('../controllers/pdf/addPresentation');
const deletePresentation = require('../controllers/pdf/deletePresentation');
const downloadPresentation = require('../controllers/pdf/downloadPresentation');

router.get('/:pdfName', getPresentation);
router.get('/', getPresentations);
router.post('/', addPresentation);
router.delete('/:pdfId', deletePresentation);
router.get('/download/:pdfName', downloadPresentation);

module.exports = router;
