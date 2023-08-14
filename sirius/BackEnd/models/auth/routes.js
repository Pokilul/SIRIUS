/**
 * Routes for authentication endpoints
 * @module models/auth
 */

const express = require('express');
const responses = require('../../network/response');
const controller = require('./index');

/**
 * Express router to mount authentication related functions on.
 * @type {object}
 * @const
 * @namespace authRouter
 */
const router = express.Router();

/**
 * Route serving login endpoint.
 * @name post/login
 * @function
 * @memberof module:models/auth~authRouter
 * @inner
 * @param {Object} req - Express request object.
 * @param {Object} req.body - Request body.
 * @param {string} req.body.Usuario - User's username.
 * @param {string} req.body.Password - User's password.
 * @param {Object} res - Express response object.
 * @param {function} next - Express middleware next function.
 */
router.post('/login', login);

/**
 * Login controller function.
 * @name login
 * @function
 * @memberof module:models/auth~authRouter
 * @inner
 * @param {Object} req - Express request object.
 * @param {Object} req.body - Request body.
 * @param {string} req.body.Usuario - User's username.
 * @param {string} req.body.Password - User's password.
 * @param {Object} res - Express response object.
 * @param {function} next - Express middleware next function.
 * @returns {Promise<void>} - Promise object that represents the completion of the login operation.
 */
async function login(req, res, next) {
    try {
        const token = await controller.login(req.body.Usuario, req.body.Password);
        responses.success(req, res, token, 200);
    } catch (error) {
        next(error);
    }
}

module.exports = router;