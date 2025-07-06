const express = require('express');
const cors = require('cors');
const app = express(); // ← Express-приложение

const apiRoutes = require('./routes/api');

// Middlewares
app.use(cors());
app.use(express.json()); // ← Обязательно для парсинга JSON из тела запросов

// Роуты
app.use('/api', apiRoutes);

// Экспорт сервера
module.exports = app;





