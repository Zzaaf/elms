const express = require('express');
const path = require('path');
const serverConfig = require('./config/serverConfig');

const app = express();
const PORT = process.env.PORT ?? 4000;

serverConfig(app);

app.get('*', (req, res) => {
  res.sendFile(process.env.NODE_ENV === 'production'
    ? path.join('/application/dist/index.html')
    : path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => console.log(`Server started at ${PORT} port`));
