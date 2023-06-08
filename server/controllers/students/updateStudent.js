const {
  User, GroupStudent, Group, Phase,
} = require('../../db/models');

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const {
    firstName, lastName, patronymic, email, gitHub, telephone,
  } = req.body;
  try {
    const student = await User.findOne({
      where: { id: Number(id) },
      attributes: { exclude: ['password', 'status', 'aUrl', 'roleId', 'createdAt', 'updatedAt'] },
      include: {
        model: GroupStudent,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [{
          model: Group,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
        { model: Phase, attributes: { exclude: ['createdAt', 'updatedAt'] } }],
      },
    });
    student.firstName = firstName;
    student.lastName = lastName;
    student.patronymic = patronymic;
    student.email = email;
    student.gitHub = gitHub;
    student.telephone = telephone;
    student.save();
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
};

module.exports = updateStudent;
