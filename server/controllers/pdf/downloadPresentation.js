const path = require('path');

const downloadPresentation = async (req, res) => {
  try {
    const { pdfName } = req.params;
    res.download(path.join(__dirname, '..', '..', 'assets', `${pdfName}.pdf`));
  } catch ({ message }) {
    res.json({ message });
  }
};
module.exports = downloadPresentation;
