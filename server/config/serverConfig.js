const express = require('express');
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
const getCurrentDate = require('../utils/getCurrentDate');
const deleteOldLogFiles = require('../middleware/deleteOldLogFiles');

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, `../logs/${getCurrentDate()}-access.log`), { flags: 'a' }),
    skip: (req, res) => res.statusCode < 400,
  }));
  app.use(deleteOldLogFiles)
};

module.exports = serverConfig;
