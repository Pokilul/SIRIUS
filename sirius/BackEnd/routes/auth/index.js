/**
 * Module that exports the authentication controller with the database connection.
 * @module routes/auth/index
 */

const db = require('../../database/mysql');
const ctrl = require('./controller');

module.exports = ctrl(db);