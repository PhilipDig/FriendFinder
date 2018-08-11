var express = require('express');
var apiRouter = express.Router();
var bodyParser = require("body-parser");

// Sets up the Express app to handle data parsing
apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.json());

// User data
var users = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
];

// Home page route
apiRouter.post('/api/friends', function (req, res) {

    let scores = req.body
    console.log(scores)
});

module.exports = apiRouter;