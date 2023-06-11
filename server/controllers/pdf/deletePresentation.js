const fs = require('fs').promises;
const path = require('path');
const { Presentation } = require('../../db/models');

const deletePresentation = async (req, res) => {
  try {
    const { pdfId } = req.params;
    const presentation = await Presentation.findOne({ where: { id: pdfId } });
    const { fileName } = presentation;
    await fs.unlink(path.join(__dirname, '..', '..', 'assets', `${fileName}.pdf`));
    const result = await Presentation.destroy({ where: { id: pdfId } });
    if (result) {
      res.json(pdfId);
      return;
    }
    throw new Error('Не удалось удалить');
  } catch ({ message }) {
    res.json({ message });
  }
};
module.exports = deletePresentation;
