// Set up MySQL connection.
"use strict";


require("dotenv").config();

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "burgers_db"
// });
var db_connect_info = {
  host: "localhost" ,
  port: 3306,
  user: "root",
  password:"password",
  database: "burgers_db"
};

var mysql = require("mysql");

if(process.env.JAWSDB_URL) {
  var connection = mysql.createConnection( process.env.JAWSDB_URL );
} else {
var connection = mysql.createConnection( db_connect_info );
}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;


