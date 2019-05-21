// Requiring our Todo model
const db = require("../models");

// Routes
module.exports = function (app) {

  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (results) {
      let burgerObject = {
        burgers: results
      };
      res.render("index", burgerObject);
    });
  });

  // Get all burgers
  app.get("/api/burgers", function (req, res) {
    db.Burger.findAll({}).then(function (results) {
      res.json(results)
    })
  })

  // Post route - add burgers
  app.post("/api/burgers", function (req, res) {
    console.log("POST route: add burger");
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function (results) {
      res.json(results)
    });
  });

  // PUT route  - edit burger
  app.put("/api/burgers/:id", function (req, res) {

    console.log("PUT edit burger for id:", req.params.id)
    db.Burger.update({
      devoured: true
    }, {
        where: {
          id: req.params.id
        }
      }).then(function (results) {
        console.log("Put complete")
        res.json(results)
      })
  });

};
