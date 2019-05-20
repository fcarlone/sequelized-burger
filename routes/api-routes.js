// Requiring our Todo model
const db = require("../models");

// Routes
module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (results) {
      console.log('results', results)

      let burgerObject = {
        burgers: results
      }

      res.render("index", burgerObject);
    });

  });
};
