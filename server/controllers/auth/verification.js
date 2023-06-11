const bcrypt = require('bcrypt');
const {
  User, GroupStudent, Group, Phase, Diploma,
} = require('../../db/models');

const verification = async (req, res) => {
  try {
    const studentId = req.session.userId;
    if (studentId) {
      const student = await User.findOne({
        where: { id: studentId },
        attributes: { exclude: ['password', 'status', 'aUrl', 'roleId', 'createdAt', 'updatedAt'] },
        include: [{
          model: GroupStudent,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
          include: [{
            model: Group,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
          { model: Phase, attributes: { exclude: ['createdAt', 'updatedAt'] } },
          ],
        },
        { model: Diploma, attributes: { exclude: ['createdAt', 'updatedAt'] } },
        ],
      });
      res.status(201).json(student);
    } else {
      res.status(403).json({ message: 'Студент не в сети' });
    }
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
};

module.exports = verification;
