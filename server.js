
// 1. INITIAL FILE server.js
// 2. create file structure
// 3. npm init
// 4. npm install
// 5. create database in schema.sql
// 6. config/ (connection to database, orm)
// 7. public/ (files for frontend)
// 8. routes/ (api routing, html routing)

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

// static is for routing public files
// for '/' + directory
var staticContentFolder = __dirname + '/app/public';
console.log(staticContentFolder);
app.use(express.static(staticContentFolder));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./app/routes/api-routes.js')(app)
require('./app/routes/html-routes.js')(app)

app.listen(PORT,function(){
  console.log('App listening on PORT ' + PORT);
})