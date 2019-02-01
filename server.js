var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();
var exphbs = require("express-handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
var connection = require("./config/connection.js")

app.use(routes);

// app.post("/create", function(req, res) {
//     connection.query("INSERT INTO burgers (burger_name) VALUES (?);", [req.body.burger], function(err, data){
//         if (err) throw err;
//         res.redirect("/");
//     });
// });

// app.get("/", function(req, res) {
//     connection.query("SELECT * FROM burgers", function(err, data) {
//         res.render('index', {burgers:data});
//     });
// })

// app.post("/update", function(req, res) {
//     connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?;", [req.body.updatedBurger, req.body.id], function(err, result) {
//         if (err) throw err;
//         res.redirect("/");
//     });
// });
// app.post("/update", function(req, res) {
//     connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?;", [req.body.updatedBurger, req.body.id], function(err, result) {
//         if (err) throw err;
//         res.redirect("/");
//     });
// });
// app.post("/devour", function(req, res) {
//     console.warn('devour', req.body)
//     connection.query("UPDATE burgers SET devoured = true WHERE id = ?;", [req.body.id], function(err, result) {
//         if (err) throw err;
//         res.redirect("/");
//     });
// });



// app.post("/delete", function(req, res) {
//     connection.query("DELETE FROM burgers WHERE id = ?;", [req.body.id], function(err, results) {
//         if (err) throw err;
//         res.redirect("/");
//     });
// });


app.listen(PORT, function(){
    console.log("Now listening at localhost:" + PORT)
})