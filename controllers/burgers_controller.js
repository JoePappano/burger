var express = require("express");
var burger = require("../models/burger.js");


var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/create", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.burger], function(result) {
      res.redirect("/");
    });
  });
  
  router.post("/devour", function(req, res) {
    var condition = "id = " + req.body.id;
  
    console.log("condition", condition);
  
    burger.updateOne(
        {
      devoured: req.body.devoured
    }, 
    condition, 
    function(result) {
      res.redirect("/")
    });
  });
  
  router.post("/delete", function(req, res) {
    var condition = "id = " + req.body.id;
    console.log("condition: " + condition)
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
    res.redirect("/");
  });

module.exports = router;