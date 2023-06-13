const logout = async (req, res) => {
  try {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).json({ message: 'Ошибка при удалении сессии' });
      }
      return res.clearCookie('user_auth').json({ message: 'Успешный выход' });
    });
  } catch ({ message }) {
    res.status(404).json({ message });
  }
};

module.exports = logout;
