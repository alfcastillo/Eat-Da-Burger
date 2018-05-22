// Set up MySQL connection.
var mysql = require("mysql");
var connection;

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burger_db"
// });
// if (process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// }else {
//   connection = mysql.createConnection ({
//     host: 'y5s2h87f6ur56vae.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     user: 'et58w1g1stufww16',
//     password: 'sd4qsbjwwh508m6v',
//     database: 'u9p88lhm03o1093t'
//   });
// }

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'hacktheplanet',
    database: 'todoagain_db'
  });
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
