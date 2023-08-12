/**
 * Middleware function to check if the user is authenticated.
 * @module checkAuth
 */

const auth = require("../../auth")

/**
 * Middleware function to check if the user is authenticated.
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
function checkAuth() {

    /**
     * Middleware function to check if the user is authenticated.
     * @function
     * @param {Object} req - Express request object.
     * @param {Object} res - Express response object.
     * @param {Function} next - Express next middleware function.
     */
    function middleware(req, res, next) {
        const ID_Usuario = req.body.ID_Usuario
        auth.checkAuth.confirmToken(req, ID_Usuario)
        next();
    }

    return middleware;
};

module.exports = checkAuth;
