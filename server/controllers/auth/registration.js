const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { sendingLetter } = require('../../utils/sendingLetter');
const { User } = require('../../db/models');

const registration = async (req, res) => {
  const {
    firstName, lastName, patronymic, email, password, password2, gitHub, telephone,
  } = req.body;
  try {
    if (firstName && lastName && patronymic && email
      && password && password2 && telephone && gitHub) {
      if (password.length > 8 || password2.length > 8) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          if (password === password2) {
            const hash = await bcrypt.hash(password, 10);
            const aUrl = uuidv4();
            const authenticationUrl = await bcrypt.hash(aUrl, 10);
            await User.create({
              firstName,
              lastName,
              patronymic,
              email,
              password: hash,
              roleId: 2,
              gitHub,
              telephone,
              aUrl: authenticationUrl,
            });
            sendingLetter(email, authenticationUrl);
            res.status(201).json({ message: 'ok' });
          } else {
            res.status(403).json({ message: 'Ваши пароли не совпадают' });
          }
        } else {
          res.status(403).json({ message: 'Такой email уже существует' });
        }
      } else {
        res.status(403).json({ message: 'Пароль должен быть больше 8 символов' });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = registration;
