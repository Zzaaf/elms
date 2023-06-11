const {
  Diploma,
} = require('../../db/models');

const addDiploma = async (req, res) => {
  const {
    series,
    number,
    lastName,
    firstName,
    patronymic,
    dateBirth,
    sex,
    snils,
    citizenship,
    typeEducation,
  } = req.body;

  try {
    const diploma = await Diploma.create({
      series,
      number,
      lastName,
      firstName,
      patronymic,
      dateBirth,
      sex,
      snils,
      citizenship,
      typeEducation,
      studentId: req.session.userId,
    });
    res.status(200).json(diploma);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = addDiploma;
