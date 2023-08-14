app.js
// Import required modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config');

// Import routes
const cuentas = require('./models/cuentas/routes');
const auth = require('./models/auth/routes');

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

// Use error handling middleware
app.use(error);

// Export app
module.exports = app;

config.js
require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'secret',
    },
    mysql: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'test',
    },
}

index.js 
// Import the app module
const app = require('./app');

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server is running on port', app.get('port'));
});


auth/index.js

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

database/mysql.js
// Import required modules
const mysql = require('mysql');
const config = require('../config');

// Set up database configuration
const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let connection;

function handleCon() {
    connection = mysql.createConnection(dbconfig);
    connection.connect((err) => {
        if (err) {
            console.log('[db err]', err);
            setTimeout(handleCon, 2000);
        } else {
            console.log('DB Connected!');
        }
    });

    // Handle database errors
    connection.on('error', err => {
        console.log('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleCon();
        } else {
            throw err;
        }
    });
}

handleCon();

function list(table) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, data) => {
            return err ? reject(err) : resolve(data);
        });
    });
}

function db_select(table, ID_Usuario) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE ID_Usuario = ${ID_Usuario}`, (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
}

function db_delete(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM ${table} WHERE ID_USUARIO = ?`, data, (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
}

function db_add(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`, [data, data], (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
}

function query(table, query) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE ?`, query, (err, result) => {
            return err ? reject(err) : resolve(result[0]);
        });
    });
}

// Export functions for use in other modules
module.exports = {
    list,
    db_select,
    db_delete,
    db_add,
    query
}

middlewares/errors.js
function error (message, code) {
    let e = new Error(message);

    if (code) {
        e.statusCode = code;
    }

    return e;
}

module.exports = error;


network/errors.js
const responses = require('./response');
const controller = require('BackEnd/models/auth/controller');

function errors(err, req, res, next) {
  console.error('[error]', err);

  const message = err.message || 'Error interno';
  const status = err.statusCode || 500;

  responses.error(req, res, message, status);
}

module.exports = errors;

network/response.js

exports.success = function (req , res, message, status) {
    const statusCode = status || 200;
    const statusMessage = message || '';
    res.status(statusCode).send({
        error : false,
        status : statusCode,
        body : statusMessage
    });
}

exports.error = function (req , res, message, status, details) {
    const statusCode = status || 500;
    const statusMessage = message || 'Internal Server Error';
    const statusDetails = details || '';
    res.status(statusCode).send({
        error : false,
        status : statusCode,
        body : statusMessage,
        details : statusDetails
    });
}

models/auth/controller.js
const table = 'auth';
const bcrypt = require('bcrypt');
const auth = require('../../auth');

module.exports = function (InjectionDatabase) {

    let database = InjectionDatabase;

    if (!database) {
        database = require('../../database/mysql');
    }

    async function login(Usuario, Password) {
        const authData = await database.query(table, { Usuario: Usuario });
        return bcrypt.compare(Password, authData.Password)
            .then((result) => {
                if (result === true) {
                    return auth.assignToken({ ...authData});
                }else{
                    throw new Error('Usuario o contraseña incorrectos');
                }
            })
    }

    async function db_add(data) {
        const authData = {
        ID_Usuario: data.ID_Usuario,
        }
        if (data.Usuario) {
            authData.Usuario = data.Usuario;
        }

        if (data.Password) {
            authData.Password = await bcrypt.hash(data.Password.toString(), 10);
        }
        return database.db_add(table, authData);
    }

    return {
        login,
        db_add
    }
}

models/auth/index.js
const db = require('../../database/mysql');
const ctrl = require('./controller');

module.exports = ctrl(db);

models/auth/routes.js
const express = require('express');
const responses = require('../../network/response');
const controller = require('./index');

const router = express.Router();

router.post('/login', login);

async function login(req, res, next) {
   try {
       const token = await controller.login(req.body.Usuario, req.body.Password);
       responses.success(req, res, token, 200);
   } catch (error) {
       next(error);
   }
}

module.exports = router;

models/cuentas/controller.js
const table = 'cuentas';
const auth = require('../auth');

module.exports = function (InjectionDatabase) {

    let database = InjectionDatabase;

    if (!database) {
        database = require('../../database/mysql');
    }

    function u_list() {
        return database.list(table);
    }

    function u_select(ID_Usuario) {
        return database.db_select(table, ID_Usuario);
    }

    async function u_add(data) {
        const usuario = {
            ID_Usuario: data.ID_Usuario,
            Nombre: data.Nombre,
            Nivel: data.Nivel,
        }
        const response = await database.db_add(table, usuario);
        var insertId = 0;
        if (data.ID_Usuario == 0) {
            insertId = response.insertId;
        } else {
            insertId = data.ID_Usuario;
        }
        var response2 = ''
        if (data.Usuario || data.Password) {
            response2 = await auth.db_add({
                ID_Usuario: insertId,
                Usuario: data.Usuario,
                Password: data.Password
            })
        }
        return response2;
    }

    function u_delete(data) {
        return database.db_delete(table, data);
    }

    return {
        u_list,
        u_select,
        u_add,
        u_delete
    }
}

models/cuentas/index.js
const db = require('../../database/mysql');
const ctrl = require('./controller');

module.exports = ctrl(db);

models/cuentas/routes.js
const express = require('express');
const security = require('./security');
const responses = require('../../network/response');
const controller = require('./index');

const router = express.Router();

async function u_list(req, res, next) {
    try {
        const list = await controller.u_list();
        responses.success(req, res, list, 200);
    } catch (error) {
        next(error);
    }
}

async function u_select(req, res, next) {
    try {
        const select = await controller.u_select(req.params.ID_Usuario);
        responses.success(req, res, select, 200);
    } catch (error) {
        next(error);
    }
}

async function u_add(req, res, next) {
    try {
        const add = await controller.u_add(req.body);
        responses.success(req, res, add, 201);
    } catch (error) {
        next(error);
    }
}

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

models/cuentas/security.js
const auth = require("../../auth")

function checkAuth() {
    function middleware(req, res, next) {
        const ID_Usuario = req.body.ID_Usuario
        auth.checkAuth.confirmToken(req, ID_Usuario)
        next();
    }

    return middleware;
};

module.exports = checkAuth;
