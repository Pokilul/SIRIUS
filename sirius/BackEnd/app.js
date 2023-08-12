const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const cuentas = require('./routes/cuentas/routes');
const auth = require('./routes/auth/routes');
const error = require('./network/errors');
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('port', config.app.port);
app.use('/api/cuentas', cuentas);
app.use('/api/auth', auth)
app.use(error);
module.exports = app;