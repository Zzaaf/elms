const { Presentation } = require('../../db/models');

const addPresentation = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
    const { file } = req.files;
    const { type, phase } = req.body;
    const fileName = file.name.split(' ')[0];
    const presentation = await Presentation.create({
      title: file.name,
      fileName,
      typeDepartmentId: type,
      phaseId: phase,
    });
    file.mv(`${__dirname}/../../assets/${fileName}.pdf`, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(presentation);
    });
  } catch ({ message }) {
    res.json({ message });
  }
};
module.exports = addPresentation;
