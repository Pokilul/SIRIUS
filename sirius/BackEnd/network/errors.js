/**
 * Middleware function to handle errors in the application.
 * @param {Error} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const responses = require('./response');

function errors(err, req, res, next) {
  console.error('[error]', err);

  const message = err.message || 'Error interno';
  const status = err.statusCode || 500;

  responses.error(req, res, message, status);
}

module.exports = errors;