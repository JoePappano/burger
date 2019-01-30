var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {{
            cb(res);
        }})
      },
      insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
          cb(res);
        });
      },
      updateOne: function(objColVals, condition, cb) {
          console.log("my condition " , condition)
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
      },
      updateTwo: function(table, objColVals, condition, cb) {
        orm.updateTwo("burgers", objColVals, condition, function(res) {
            cb(res);
        });
      },
      delete: function(table, condition, cb) {
          orm.delete("burgers", condition, function(res) {
            cb(res)
          });
      }
}

module.exports = burger;