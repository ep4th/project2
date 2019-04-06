var express = require("express");
var expbs = require("express-handlebars");
var app = express();
var path = require("path");
var db = require("../models");

module.exports = function(app) {

  app.engine(
    "handlebars",
    expbs({
      defaultLayout: "main",
      layoutsDir: path.join(__dirname, "../views/layouts")
    })
  );

  app.set("view engine", "handlebars");

  app.get("/profile", function(req, res) {
    db.User.findAll({ raw: true }).then(function(data) {
      console.log("test", data);
      res.render("profile", { users: data });
    });
  });

  app.get("/", function(req, res){
    res.render("index");
  });

  app.get("/event", function(req, res) {
    db.Event.findAll({raw: true}).then(function(data) {
      console.log("test", data);
      res.render("events", { Event: data });
    });
  });

};
