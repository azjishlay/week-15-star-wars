var mysql = require('mysql');

var source = {
  localhost: {
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'starwars'
  },
  jawsDB: {
    port: 3306,
    host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'w46dywm0js66cdaz',
    password: 'elgz2ebe97nitkrc',
    // database: 'starwars' // connect to remote database
  }
}
var connection = mysql.createConnection(source.jawsDB);

connection.connect(function(err){
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadID);
});

module.exports = connection;