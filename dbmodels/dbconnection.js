
var mysql = require('mysql');
port = process.env.PORT || 3000;

if (port === 3000) {

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'your_api',
    insecureAuth: true
});
} else {
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'your_api',
        insecureAuth: true
    });
}

connection.connect();

module.exports = connection;