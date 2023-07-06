const bcrypt = require('bcrypt');
const {
  User, GroupStudent, Group, Phase, Diploma,
} = require('../../db/models');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email && password) {
      let student = await User.findOne({ where: { email, status: true } });
      if (student && await bcrypt.compare(password, student.password)) {
        student = await User.findOne({
          where: { email },
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
        req.session.userId = student.id;
        res.status(201).json(student);
      } else {
        res.status(403).json({ message: 'Ваш email или пароль не соответствуют' });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

module.exports = login;
