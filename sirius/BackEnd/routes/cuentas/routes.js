/**
 * Express router for user accounts.
 * @module routes/cuentas
 */

const express = require('express');
const security = require('./security');
const responses = require('../../network/response');
const controller = require('./index');

const router = express.Router();

/**
 * Route for getting a list of all user accounts.
 * @name GET /cuentas/
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
async function u_list(req, res, next) {
    try {
        const list = await controller.u_list();
        responses.success(req, res, list, 200);
    } catch (error) {
        next(error);
    }
}

/**
 * Route for getting a specific user account by ID.
 * @name GET /cuentas/:ID_Usuario
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
async function u_select(req, res, next) {
    try {
        const select = await controller.u_select(req.params.ID_Usuario);
        responses.success(req, res, select, 200);
    } catch (error) {
        next(error);
    }
}

/**
 * Route for adding a new user account.
 * @name POST /cuentas/
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} req.body - Request body containing user account data.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
async function u_add(req, res, next) {
    try {
        const add = await controller.u_add(req.body);
        responses.success(req, res, add, 201);
    } catch (error) {
        next(error);
    }
}

/**
 * Route for deleting a user account by ID.
 * @name PUT /cuentas/
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} req.params.ID_Usuario - ID of the user account to delete.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
async function u_delete(req, res, next) {
    try {
        const del = await controller.u_delete(req.params.ID_Usuario);
        responses.success(req, res, del, 200);
    } catch (error) {
        next(error);
    }
}

// Routes
router.get('/', u_list);
router.get('/:ID_Usuario', u_select);
router.post('/', u_add);
router.put('/', security(), u_delete);

module.exports = router;