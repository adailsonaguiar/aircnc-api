const express = require('express');
const routes = express.Router();

const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/Session');
const SpotController = require('./controllers/Spot');
const DashboardController = require('./controllers/Dashboard');

const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashboardController.show);

module.exports = routes;
