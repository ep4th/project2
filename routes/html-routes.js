// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });

  // cms route loads cms.html
  app.get("/profile", function(req, res) {
    db.User.findAll({ raw: true }).then(function(data) {
      console.log("test", data);
      res.render("profile", { users: data });
    });

    // res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  app.get("/event", function(req, res) {
    db.Event.findAll({ }).then(function(data) {
      console.log("test", data);
      res.render("events", { Event: data });
    });

    // res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // blog route loads blog.html
  // app.get("/blog", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });

  // app.get("/authors", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  // });
};