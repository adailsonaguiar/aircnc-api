const express = require('express');
const routes = express.Router();
const SessionController = require('./controllers/Session');

routes.post('/sessions', SessionController.store);

module.exports = routes;
