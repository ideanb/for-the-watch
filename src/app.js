const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

require('dotenv').config();

const middlewares = require('./middlewares');
const controllers = require('./controllers');

const app = express();

app.use(morgan('dev'));
app.use(helmet());

app.use('/', controllers);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
