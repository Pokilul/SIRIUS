const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../middlewares/errors');

const secret = config.jwt.secret;

function assignToken(data){
    return jwt.sign(data, secret);
}

function verifyToken(token){
    return jwt.verify(token, secret);
}

const checkAuth = {
    confirmToken: function(req, ID_Usuario) {
        const decoded = decodedHeader(req);
        if (decoded.ID_Usuario !== ID_Usuario) {
            throw error('No tienes privilegios para hacer esto', 401);
        }
    }
}

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