/**
 * Controller for managing 'portada' table.
 * @module portada/controller
 */

const table = 'portada';

module.exports = function (InjectionDatabase) {

    let database = InjectionDatabase;

    if (!database) {
        database = require('../../database/mysql');
    }

    function p_list() {
        return database.list(table);
    }

    function p_select(ID_Portada) {
        return database.query(table, { ID_Portada: ID_Portada } );
    }

    async function p_add(data) {
        const response = await database.db_add(table, data);

    }


    function p_delete(data) {
        return database.db_delete(table, data);
    }

    return {
        p_list,
        p_select,
        p_add,
        p_delete
    }
}
