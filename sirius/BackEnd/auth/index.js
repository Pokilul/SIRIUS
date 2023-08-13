/**
 * @fileoverview This file contains functions related to authentication using JSON Web Tokens (JWT).
 * @version 1.0.0
 */

const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../middlewares/errors');

const secret = config.jwt.secret;

/**
 * Generates a JWT token with the given data.
 * @param {Object} data - The data to be included in the token.
 * @returns {string} The generated JWT token.
 * @function
 * @name assignToken
 */
function assignToken(data){
    return jwt.sign(data, secret);
}

/**
 * Verifies the given JWT token and returns the decoded data.
 * @param {string} token - The JWT token to be verified.
 * @returns {Object} The decoded data from the token.
 * @function
 * @name verifyToken
 */
function verifyToken(token){
    return jwt.verify(token, secret);
}

/**
 * An object containing functions to check if a user is authorized to perform certain actions.
 * @namespace
 * @name checkAuth
 */
const checkAuth = {
    /**
     * Confirms if the user associated with the given request is authorized to perform an action.
     * @param {Object} req - The request object containing the user's authorization header.
     * @param {number} ID_Usuario - The ID of the user who is authorized to perform the action.
     * @throws {Error} If the user is not authorized to perform the action.
     * @function
     * @name confirmToken
     * @memberof checkAuth
     */
    confirmToken: function(req, ID_Usuario) {
        const decoded = decodedHeader(req);
        if (decoded.ID_Usuario !== ID_Usuario) {
            throw error('No tienes privilegios para hacer esto', 401);
        }
    }
}

/**
 * Extracts the JWT token from the given authorization header and returns it.
 * @param {string} authorizationHeader - The authorization header containing the JWT token.
 * @returns {string} The extracted JWT token.
 * @throws {Error} If the authorization header is missing or invalid.
 * @function
 * @name getToken
 */
function getToken(authorizationHeader){
    if(!authorizationHeader){
        throw error('No authorization header', 401);
    }

    if(authorizationHeader.indexOf('Bearer') === -1){
        throw error('Invalid authorization header', 401);
    }

    let token = authorizationHeader.replace('Bearer ', '');
    return token;
}

/**
 * Decodes the JWT token from the given request's authorization header and returns the decoded data.
 * @param {Object} req - The request object containing the user's authorization header.
 * @returns {Object} The decoded data from the JWT token.
 * @throws {Error} If the authorization header is missing or invalid, or if the JWT token is invalid.
 * @function
 * @name decodedHeader
 */
function decodedHeader (req){
    const authorizationHeader = req.headers.authorization || '';
    const token = getToken(authorizationHeader);
    const decoded = verifyToken(token);

    req.user = decoded;

    return decoded;
}

module.exports = {
    assignToken,
    checkAuth
}