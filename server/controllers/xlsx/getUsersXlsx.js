require('dotenv').config();
const xlsx = require('xlsx');
const { User } = require('../../db/models');

async function getXlsx(req, res) {
  const users = await User.findAll({
    raw: true,
    attributes: {
      exclude: ['password', 'roleId', 'createdAt', 'updatedAt'],
    },
  });

  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet(users);

  // Добавление листа в таблицу Excel
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  // Генерация буфера для Excel-файла
  const buffer = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });
  res.type('application/octet-stream');
  res.attachment('file.xlsx');
  res.send(buffer);
}

module.exports = getXlsx;
