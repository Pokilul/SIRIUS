/**
 * Configuration object for the application.
 *  app - Configuration for the application.
 *  app.port - The port number for the application.
 *  jwt - Configuration for JSON Web Tokens.
 *  jwt.secret - The secret key used to sign JSON Web Tokens.
 *  mysql - Configuration for MySQL database.
 *  mysql.host - The hostname of the MySQL server.
 *  mysql.user - The username used to connect to the MySQL server.
 *  mysql.password - The password used to connect to the MySQL server.
 *  mysql.database - The name of the MySQL database to use.
 */

require('dotenv').config();

/**
 * Configuration object for the application.
 * @type {Config}
 */
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
