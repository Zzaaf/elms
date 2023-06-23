const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { sendingLetter } = require('../../utils/sendingLetter');
const { User } = require('../../db/models');

const registration = async (req, res) => {
  const {
    firstName, lastName, patronymic, email, password, cpassword, gitHub, telephone,
  } = req.body;
  try {
    if (firstName && lastName && patronymic && email
      && password && cpassword && telephone && gitHub) {
      if (password.length > 8 || cpassword.length > 8) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          if (password === cpassword) {
            const hash = await bcrypt.hash(password, 10);
            const authenticationUrl = uuidv4();

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
              status: false,
            });
            sendingLetter(email, authenticationUrl);
            res.status(201).json({ message: 'successfully' });
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
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

module.exports = registration;
