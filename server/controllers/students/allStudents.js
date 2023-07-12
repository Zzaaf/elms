const { User } = require('../../db/models');

const allStudents = async (req, res) => {
  try {
    const students = await User.findAll({ where: { roleId: 2 }, order: [['firstName', 'ASC']] });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = allStudents;
