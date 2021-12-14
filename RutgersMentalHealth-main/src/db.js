const mysql = require('mysql')
const db = mysql.createConnection({
host: "us-cdbr-east-04.cleardb.com",
user: "b67965676b9bc1",
password: "fef70fef",
database:"`heroku_f7b0b0e3718ae7b`" 
})

module.exports = db;