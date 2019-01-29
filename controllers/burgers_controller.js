var express = require("express");
var burger = require("../models/burger.js");


var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        cats: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/create", function(req, res) {
    burger.create(["burger_name"], [req.body.burger], function(result) {
        res.redirect("/");
    });
  });
  
  router.post("/update", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
//     burger.updateOne({
//       sleepy: req.body.sleepy
//     }, condition, function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });
  
//   router.delete("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     cat.delete(condition, function(result) {
//       if (result.affectedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });

module.exports = controller;