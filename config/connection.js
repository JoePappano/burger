var mysql = require("mysql");
if (process.env.PORT) {
    var connection = mysql.createConnection({
        host: "ec2-54-83-55-115.compute-1.amazonaws.com",
        port: 5432,
        user: "hqlrtnxumoixtk",
        password: "6ee54a47cc15fe58cb24a694f983ffdefef1aebdbb212de537a80d680db41a83",
        database: "dd9k1d5aecu2c6",
        // use_env_variable: "JAWSDB_URL",
        dialect: "mysql"
    });
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