const logout = async (req, res) => {
  try {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).json({ message: 'Ошибка при удалении сессии' });
      }
      res
        .clearCookie('user_auth')
        .json({ message: 'Успешный выход' });
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = logout;
