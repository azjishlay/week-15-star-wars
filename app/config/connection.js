var mysql = require('mysql');
var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'starwars'
});

connection.connect(function(err){
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadID);
});

module.exports = connection;