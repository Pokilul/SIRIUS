/**
 * @fileoverview This module handles the connection to a MySQL database and provides functions to interact with it.
 * @exports list
 * @exports db_select
 * @exports db_delete
 * @exports db_add
 * @exports query
 */

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

/**
 * @function handleCon
 * @description Connects to the database and handles errors.
 */
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

/**
 * @function list
 * @description Lists all items in a table.
 * @param {string} table - The name of the table to list items from.
 * @returns {Promise} A promise that resolves with the list of items or rejects with an error.
 */
function list(table) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, data) => {
            return err ? reject(err) : resolve(data);
        });
    });
}

/**
 * @function db_select
 * @description Selects an item from a table by ID.
 * @param {string} table - The name of the table to select the item from.
 * @param {number} ID_Usuario - The ID of the item to select.
 * @returns {Promise} A promise that resolves with the selected item or rejects with an error.
 */
function db_select(table, ID_Usuario) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE ID_Usuario = ${ID_Usuario}`, (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
}

/**
 * @function db_delete
 * @description Deletes an item from a table by ID.
 * @param {string} table - The name of the table to delete the item from.
 * @param {number} data - The ID of the item to delete.
 * @returns {Promise} A promise that resolves with the result of the deletion or rejects with an error.
 */
function db_delete(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM ${table} WHERE ID_USUARIO = ?`, data, (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
}

/**
 * @function db_add
 * @description Adds an item to a table.
 * @param {string} table - The name of the table to add the item to.
 * @param {Object} data - The data of the item to add.
 * @returns {Promise} A promise that resolves with the result of the addition or rejects with an error.
 */
function db_add(table, data) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`, [data, data], (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
}

/**
 * @function query
 * @description Queries a table with a specific condition.
 * @param {string} table - The name of the table to query.
 * @param {Object} query - The condition to query the table with.
 * @returns {Promise} A promise that resolves with the result of the query or rejects with an error.
 */
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