// External Dependencies
// =============================================================
var express = require("express");

// Internal Dependencies
// =============================================================\
let apiRoutes = require("./app/routing/apiRoutes")
let htmlRoutes = require("./app/routing/htmlRoutes")
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(apiRoutes)
app.use(htmlRoutes)

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});