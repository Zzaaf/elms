const { Presentation } = require('../../db/models');

const getPresentations = async (req, res) => {
  try {
    const presentations = await Presentation.findAll({ raw: true });
    res.json(presentations);
  } catch ({ message }) {
    res.json({ message });
  }
};
module.exports = getPresentations;
