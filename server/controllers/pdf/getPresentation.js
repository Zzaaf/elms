const fs = require('fs');
const path = require('path');

const getPresentation = async (req, res) => {
  try {
    const { pdfName } = req.params;
    const filePath = path.join(__dirname, '..', '..', 'assets', `${pdfName}.pdf`);

    fs.readFile(filePath, (err, data) => {
      res.contentType('application/pdf');
      res.send(data);
    });
  } catch ({ message }) {
    res.json({ message });
  }
};
module.exports = getPresentation;
