var express = require('express');
var PORT = process.env.port || 3000;
var app = express();
var exphbs = require("express-handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// var routes = require("./controllers/burgers_controller.js");
var connection = require("./config/connection.js")

// app.use(routes);

app.post("/create", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?);", [req.body.burger], function(err, data){
        if (err) throw err;
        res.redirect("/");
    });
});

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers", function(err, data) {
        res.render('index', {burgers:data});
    })
})


app.listen(PORT, function(){
    console.log("Now listening at localhost:" + PORT)
})