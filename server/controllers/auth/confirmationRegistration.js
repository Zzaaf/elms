const { User } = require('../../db/models');

const confirmationRegistration = async (req, res) => {
  const { authenticationUrl } = req.params;
  try {
    const userConfirmation = await User.findOne(
      { where: { aUrl: authenticationUrl }, attributes: { exclude: ['password', 'createdAt', 'updatedAt'] } },
    );
    userConfirmation.status = true;
    userConfirmation.save();
    req.session.userId = userConfirmation.id;
    res.status(201).json(userConfirmation);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

module.exports = confirmationRegistration;
