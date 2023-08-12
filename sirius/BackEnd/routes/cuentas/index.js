/**
 * Module that exports the controller function for the cuentas route.
 * @module routes/cuentas/index
 */

const db = require('../../database/mysql');
const ctrl = require('./controller');

module.exports = ctrl(db);