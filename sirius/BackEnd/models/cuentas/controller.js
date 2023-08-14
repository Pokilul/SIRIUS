/**
 * Controller for managing 'cuentas' table.
 * @module cuentas/controller
 */

const table = 'cuentas';
const auth = require('../auth');

/**
 * Creates a new controller instance.
 * @param {Object} InjectionDatabase - The database instance to use.
 * @returns {Object} The controller object with methods to manage 'cuentas' table.
 */
module.exports = function (InjectionDatabase) {

    let database = InjectionDatabase;

    if (!database) {
        database = require('../../database/mysql');
    }

    /**
     * Returns a list of all 'cuentas' records.
     * @returns {Promise<Array>} A promise that resolves to an array of 'cuentas' records.
     */
    function u_list() {
        return database.list(table);
    }

    /**
     * Returns a single 'cuentas' record by ID_Usuario.
     * @param {number} ID_Usuario - The ID_Usuario of the record to retrieve.
     * @returns {Promise<Object>} A promise that resolves to the 'cuentas' record.
     */
    function u_select(ID_Usuario) {
        return database.db_select(table, ID_Usuario);
    }

    /**
     * Adds a new 'cuentas' record.
     * @param {Object} data - The data for the new record.
     * @param {number} data.ID_Usuario - The ID_Usuario of the new record.
     * @param {string} data.Nombre - The Nombre of the new record.
     * @param {number} data.Nivel - The Nivel of the new record.
     * @param {string} data.Usuario - The Usuario of the new record.
     * @param {string} data.Password - The Password of the new record.
     * @returns {Promise<string>} A promise that resolves to a success message.
     */
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

    /**
     * Deletes a 'cuentas' record.
     * @param {Object} data - The data for the record to delete.
     * @returns {Promise<string>} A promise that resolves to a success message.
     */
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
