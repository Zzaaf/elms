const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email && password) {
      const user = await User.findOne({ where: { email }, attributes: { exclude: ['password', 'createdAt', 'updatedAt'] } });
      if (user && await bcrypt.compare(password, user.password)) {
        req.session.userId = user.id;
        res.status(201).json(user);
      } else {
        res.status(403).json({ message: 'Ваш email или пароль не соответствуют' });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = login;
