/**
 * Controller for authentication related operations
 * @module authController
 */

const table = 'auth';
const bcrypt = require('bcrypt');
const auth = require('../../auth');
const axios = require('axios'); // Asegúrate de tener axios instalado

/**
 * Creates a new instance of the authController
 * @param {Object} InjectionDatabase - The database instance to use for the controller
 * @returns {Object} - The authController object with login and db_add methods
 */
module.exports = function (InjectionDatabase) {

    let database = InjectionDatabase;

    if (!database) {
        database = require('../../database/mysql');
    }

    /**
     * Authenticates a user with the provided credentials
     * @async
     * @function login
     * @param {string} Usuario - The username of the user to authenticate
     * @param {string} Password - The password of the user to authenticate
     * @returns {Promise<string>} - A promise that resolves to a JWT token if authentication is successful
     * @throws {Error} - If the provided credentials are incorrect
     */
    async function login(Usuario, Password) {
        const authData = await database.query(table, { Usuario: Usuario });
        if (authData === undefined) {
            throw new Error('Usuario o contraseña incorrectos');
        }
        else {
            const cuentaData = await database.query('cuentas', { ID_Usuario: authData.ID_Usuario });
            return bcrypt.compare(Password, authData.Password)
                .then((result) => {
                    if (result === true) {
                        const token = auth.assignToken({ ...authData });
                        const level = cuentaData.Nivel;
                        return { token, level };
                    }else{
                        throw new Error('Usuario o contraseña incorrectos');
                    }
                })
            }
    }

    /**
     * Adds a new user to the authentication table
     * @async
     * @function db_add
     * @param {Object} data - The user data to add to the authentication table
     * @param {number} data.ID_Usuario - The ID of the user to add
     * @param {string} [data.Usuario] - The username of the user to add
     * @param {string} [data.Password] - The password of the user to add
     * @returns {Promise<number>} - A promise that resolves to the ID of the added user
     */
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
