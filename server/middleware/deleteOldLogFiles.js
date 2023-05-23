const fs = require('fs').promises;
const path = require('path');

const logDir = path.join(__dirname, '../logs');

async function deleteOldLogFiles() {
  // Создаем объект текущей даты
  const now = new Date();

  // Считаем количество миллисекунд в 7 днях назад от текущей даты
  const weekAgo = now - 1000 * 60 * 60 * 24 * 7;

  // Получаем имена файлов в директории логов используя функциональный модуль fs
  const fileNames = await fs.readdir(logDir);

  // Для каждого имени файла получаем объекты FileStat, содержащие информацию о файле
  const files = fileNames.map((fileName) =>
    fs.stat(path.join(logDir, fileName))
      .then((stats) => ({ name: fileName, birthtime: stats.birthtime.getTime() }))
  );

  // Ожидание полного завершения всех Promise экземпляров в массиве files
  const filesToRemove = await Promise.all(files);

  // Ожидание полного завершения всех Promise экземпляров в массиве, 
  // которые должны быть удалены, если их время создания в файловой системе (birthtime) меньше, чем weekAgo
  await Promise.all(
    filesToRemove
      .filter(({ birthtime }) => birthtime < weekAgo)
      .map(({ name }) => fs.unlink(path.join(logDir, name)))
  );
}

deleteOldLogFiles()
  .then(() => console.log('Clearing old logs'))
  .catch((err) => console.log(err.message));

module.exports = deleteOldLogFiles;