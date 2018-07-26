const mysql = require('mysql');

const options = {
    host: 'localhost',
    user: 'root',
    database: 'circle_test'
}

const connection = mysql.createConnection(options);

module.exports.connection = connection;