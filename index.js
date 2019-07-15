require('dotenv/config');
const bodyParser = require('body-parser');
const express = require('express');

const sessionController = require('./app/controllers/session');

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

app.post('/login', sessionController.login);

app.get('/magic_link', sessionController.magicLink);

try {
  app.listen(port);
  console.log(`Listening on port: ${port}`);
} catch (error) {
  console.error(error);
}