const auth = require("../../auth")

module.exports =  function checkAuth() {

    function middleware(req, res, next) {
        const ID_Usuario = req.body.ID_Usuario
        auth.checkAuth.confirmToken(req, ID_Usuario)
        next();
    }

    return middleware;
};

