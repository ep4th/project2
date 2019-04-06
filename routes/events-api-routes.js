var db = require("../models");

module.exports = function(app) {

  app.post("/submitevent", function(req, res) {
    console.log(req.body)
    db.Event.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  
};
