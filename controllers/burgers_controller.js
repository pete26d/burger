var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  
  burger.selectAll(function(burgerData) {
    
    res.render("index", { burger_data: burgerData });
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
  });
});

router.put("/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;