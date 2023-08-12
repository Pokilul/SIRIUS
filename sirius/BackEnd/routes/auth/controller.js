const table = 'auth';
const bcrypt = require('bcrypt');
const auth = require('../../auth');
const e = require('express');

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

