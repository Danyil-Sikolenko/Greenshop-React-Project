const express = require('express');
const cors = require('cors');
const path = require('path');

const apiRoutes = require('./routes/api');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Роуты
app.use('/', apiRoutes);

// Статические файлы
app.use('/img-local-to-backend', express.static(path.join(__dirname, 'img-local-to-backend')));

module.exports = app;
