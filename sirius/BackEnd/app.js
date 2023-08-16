// Import required modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');

// Import routes
const cuentas = require('./models/cuentas/routes');
const auth = require('./models/auth/routes');
const portada = require('./models/portada/routes');

// Import error handling middleware
const error = require('./network/errors');

// Create express app
const app = express();

// Use middleware
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set port
app.set('port', config.app.port);

// Use routes
app.use('/api/cuentas', cuentas);
app.use('/api/auth', auth)
app.use('/api/portada', portada)

// Use error handling middleware
app.use(error);

// Export app
module.exports = app;