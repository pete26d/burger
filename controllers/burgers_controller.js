var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  
  burger.selectALL(function(burgerData) {
    
    res.render("index", { burger_data: burgerData });
  });
});

module.exports = router;