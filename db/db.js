const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'hit-n-run'
});

// connection.connect((err) => { if(err) throw err; });

module.exports = connection;