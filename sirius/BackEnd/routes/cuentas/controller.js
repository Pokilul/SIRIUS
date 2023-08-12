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

