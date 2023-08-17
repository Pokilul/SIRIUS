/**
 * Controller for managing 'sintesis' table.
 * @module sintesis/controller
 */

const table = 'sintesis1';

module.exports = function (InjectionDatabase) {

    let database = InjectionDatabase;

    if (!database) {
        database = require('../../database/mysql');
    }

    function s_list() {
        return database.list(table);
    }

    function s_select(program) {
        return database.query(table, { Programa: program } );
    }

    async function s_add(data) {
        const program = data.Programa;
        const response = await database.db_add_update(table, { Programa: program }, data);
    }


    function s_delete(data) {
        return database.db_delete(table, data);
    }

    return {
        s_list,
        s_select,
        s_add,
        s_delete
    }
}
