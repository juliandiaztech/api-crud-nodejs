const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');

// mysql.createConnection();

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if (connection) connection.release();
        console.log('DB is conected');
        return;
});

pool.query = promisify(pool.query);

module.exports = pool;