var express = require('express');
var router = express.Router();
var path = require("path");

// Home page route
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Survey route
router.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Note this route must be defined last (including other files)
// in order to redirect to the home page by default
router.get('*', function (req, res) {
    res.redirect('/');
});

module.exports = router;