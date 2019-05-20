const express = require("express");


// Setup Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Models for syncing
const db = require("./models");

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
require("./routes/api-routes.js")(app);

// Sync the Models
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`App listening on PORT: ${PORT}`)
  });
});
