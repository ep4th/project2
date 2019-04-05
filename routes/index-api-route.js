var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  
  app.post("/", function(req, res) {
    // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
      console.log("user being created")
      return res.redirect('/users');
    });
  });
  
  
  
  
  
  
  
//   app.get("/api/authors", function(req, res) {
//     db.Author.findAll({}).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

  

//   app.get("/api/authors/:id", function(req, res) {
//     // Find one Author with the id in req.params.id and return them to the user with res.json
//     db.Author.findOne({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   app.post("/api/authors", function(req, res) {
//     // Create an Author with the data available to us in req.body
//     console.log(req.body);
//     db.Author.create(req.body).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   app.delete("/api/authors/:id", function(req, res) {
//     // Delete the Author with the id available to us in req.params.id
//     db.Author.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });
//   app.put("/api/user", function(req, res) {
//     db.User.update(
//       req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

};
