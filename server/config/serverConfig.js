const express = require('express');
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
const cors = require('cors');
const getCurrentDate = require('../utils/getCurrentDate');
const deleteOldLogFiles = require('../middleware/deleteOldLogFiles');

const corsOptions = {
  origin: ['http://localhost:5173'],
  optionsSuccessStatus: 200,
  credentials: true,
};

const serverConfig = (app) => {
  app.use(cors(corsOptions));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(process.env.NODE_ENV === 'production'
    ? path.join('/application/dist')
    : path.join(__dirname, '../../client/dist')));
  app.use(morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, `../logs/${getCurrentDate()}-access.log`), { flags: 'a' }),
    skip: (req, res) => res.statusCode < 400,
  }));
  app.use(deleteOldLogFiles);
};

module.exports = serverConfig;
