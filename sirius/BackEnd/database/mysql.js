const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let connection;

function handleCon(){
    connection = mysql.createConnection(dbconfig);
    connection.connect((err) => {
        if(err){
            console.log('[db err]', err);
            setTimeout(handleCon, 2000);
        }else{
            console.log('DB Connected!');
        }
    });

    connection.on('error', err => {
        console.log('[db err]', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            handleCon();
        }else{
            throw err;
        }
    });
}

handleCon();

function list (table) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, data) => {
            return err ? reject(err) : resolve(data);
        }); 
    });
}

function db_select (table, ID_Usuario) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE ID_Usuario = ${ID_Usuario}`, (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
}

function db_delete (table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM ${table} WHERE ID_USUARIO = ?`, data, (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
}

function db_add (table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`, [data,data], (err, result) => {
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


module.exports = {
    list,
    db_select,
    db_delete,
    db_add,
    query
}