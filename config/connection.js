var mysql = require("mysql");
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "d13xat1hwxt21t45.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "dqt06yo9af7t9r4h",
        password: "vjux9fihsl2idf1h",
        database: "	tupvkrrvao1v8hg8",
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