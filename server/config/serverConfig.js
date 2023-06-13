const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const sessionConfig = require('./sessionConfig');
const getCurrentDate = require('../utils/getCurrentDate');
const deleteOldLogFiles = require('../middleware/deleteOldLogFiles');

const corsOptions = {
  origin: ['http://localhost:5173'],
  optionsSuccessStatus: 200,
  credentials: true,
};

const serverConfig = (app) => {
  app.use(cors(corsOptions));
  app.use(session(sessionConfig));
  app.use(cookieParser());
  app.use(fileUpload());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(process.env.NODE_ENV === 'production'
    ? path.join('/application/dist')
    : path.join(__dirname, '../../client/dist')));
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, `../logs/${getCurrentDate()}-access.log`), { flags: 'a' }),
    skip: (req, res) => res.statusCode < 400,
  }));
  app.use(deleteOldLogFiles);
};

module.exports = serverConfig;
