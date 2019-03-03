var mysql = require("mysql");
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "",
        database: "burgers_db",
        use_env_variable: "JAWSDB_URL",
        dialect: "mysql"
    });
}

connection.connect(function(err) {
    if (err){
        console.log("Error connecting: " + err.stack);
    }
    console.log("connected as id " + connection.threadId);
})

module.exports = connection;