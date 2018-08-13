var express = require('express');
var apiRouter = express.Router();
var bodyParser = require("body-parser");

// Sets up the Express app to handle data parsing
apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.json());

apiRouter.post('/api/friends', function (req, res) {

    let user = req.body
    users.push(user)

    let matchedFriend = findFriend(user.scores)
    res.json(matchedFriend)
});

apiRouter.get('/api/friends', function (req, res) {

    res.json(users)
});

function findFriend(scores) {

    // Iterate through all the users and update the bestmatch with the closest scores
    let bestmatch = users[0]
    let bestDiff = 100
    users.forEach(function (user) {
        let currentDiff = 0
        scores.forEach(function (score, index) {
            currentDiff += Math.abs(score - bestmatch.scores[index])
        })
        if (currentDiff <= bestDiff) {
            bestDiff = currentDiff
            bestmatch = user
        }
    })

    return bestmatch
}

module.exports = apiRouter;

// User data
var users = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        "scores": [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        "name": "Jacob Deming",
        "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        "scores": [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    },
    {
        "name": "Jeremiah Scanlon",
        "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        "scores": [
            "5",
            "2",
            "2",
            "2",
            "4",
            "1",
            "3",
            "2",
            "5",
            "5"
        ]
    },
    {
        "name": "Louis T. Delia",
        "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
        "scores": [
            "3",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
        ]
    },
    {
        "name": "Lou Ritter",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
        "scores": [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
        ]
    },
    {
        "name": "Jordan Biason",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
        "scores": [
            "4",
            "4",
            "2",
            "3",
            "2",
            "2",
            "3",
            "2",
            "4",
            "5"
        ]
    },
    {
        "name": "Sean Kim",
        "photo": "https://www.google.com",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "Sean Kim",
        "photo": "https://www.google.com",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "2"
        ]
    },
    {
        "name": "Sean Kim",
        "photo": "https://www.google.com",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "3",
            "2"
        ]
    },
    {
        "name": "search",
        "photo": "mn",
        "scores": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "5",
            "4",
            "3",
            "2",
            "1"
        ]
    },
    {
        "name": "test",
        "photo": "test",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "GIF search query",
        "photo": "https://www.google.com/search?q=Modal&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiDp46H2ObcAhWKrVQKHQouBO4Q_AUICigB&biw=3440&bih=1303#imgrc=f-CTF1EzsdUNEM:",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "test",
        "photo": "test",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "Philip Digiglio",
        "photo": "http://google.com",
        "scores": [
            "1",
            "3",
            "3",
            "2",
            "3",
            "2",
            "2",
            "2",
            "3",
            "3"
        ]
    },
    {
        "name": "Philip Digiglio",
        "photo": "http://google.com",
        "scores": [
            "1",
            "3",
            "3",
            "2",
            "3",
            "2",
            "2",
            "2",
            "3",
            "3"
        ]
    },
    {
        "name": "Philip Digiglio",
        "photo": "http://google.com",
        "scores": [
            "1",
            "3",
            "3",
            "2",
            "3",
            "2",
            "2",
            "2",
            "3",
            "3"
        ]
    },
    {
        "name": "Philip Digiglio",
        "photo": "http://google.com",
        "scores": [
            "1",
            "3",
            "3",
            "2",
            "3",
            "2",
            "2",
            "2",
            "3",
            "3"
        ]
    },
    {
        "name": "asdf",
        "photo": "asdg",
        "scores": [
            "3",
            "2",
            "4",
            "3",
            "4",
            "3",
            "3",
            "3",
            "1",
            "3"
        ]
    },
    {
        "name": "Sarah",
        "photo": "www.google.com",
        "scores": [
            "3",
            "2",
            "4",
            "1",
            "2",
            "1",
            "3",
            "1",
            "4",
            "1"
        ]
    },
    {
        "name": "Sarah",
        "photo": "www.google.com",
        "scores": [
            "3",
            "2",
            "4",
            "1",
            "2",
            "1",
            "3",
            "1",
            "4",
            "1"
        ]
    },
    {
        "name": "Sarah",
        "photo": "www.google.com",
        "scores": [
            "3",
            "2",
            "4",
            "1",
            "2",
            "1",
            "3",
            "1",
            "4",
            "1"
        ]
    },
    {
        "name": "Sarah",
        "photo": "www.google.com",
        "scores": [
            "3",
            "2",
            "4",
            "1",
            "2",
            "1",
            "3",
            "1",
            "4",
            "1"
        ]
    },
    {
        "name": "Sarah",
        "photo": "www.google.com",
        "scores": [
            "3",
            "2",
            "4",
            "1",
            "2",
            "1",
            "3",
            "1",
            "4",
            "1"
        ]
    },
    {
        "name": "Sarah",
        "photo": "www.google.com",
        "scores": [
            "3",
            "2",
            "4",
            "1",
            "2",
            "1",
            "3",
            "1",
            "4",
            "1"
        ]
    },
    {
        "name": "Sarah",
        "photo": "www.google.com",
        "scores": [
            "3",
            "2",
            "4",
            "1",
            "2",
            "1",
            "3",
            "1",
            "4",
            "1"
        ]
    },
    {
        "name": "Sarah",
        "photo": "www.google.com",
        "scores": [
            "3",
            "2",
            "4",
            "1",
            "2",
            "1",
            "3",
            "1",
            "4",
            "1"
        ]
    },
    {
        "name": "Sarah",
        "photo": "www.google.com",
        "scores": [
            "3",
            "2",
            "4",
            "1",
            "2",
            "1",
            "3",
            "1",
            "4",
            "1"
        ]
    },
    {
        "name": "will ",
        "photo": "google",
        "scores": [
            "2",
            "2",
            "2",
            "1",
            "2",
            "1",
            "2",
            "1",
            "2",
            "1"
        ]
    },
    {
        "name": "will ",
        "photo": "google",
        "scores": [
            "2",
            "2",
            "2",
            "1",
            "2",
            "1",
            "2",
            "1",
            "2",
            "1"
        ]
    },
    {
        "name": "Shaggy",
        "photo": "https://pbs.twimg.com/profile_images/948208643484389378/QTHy21Bn_400x400.jpg",
        "scores": [
            "5",
            "1",
            "1",
            "1",
            "5",
            "1",
            "3",
            "1",
            "5",
            "5"
        ]
    },
    {
        "name": "asfdsdaf",
        "photo": "asfdsdfsdaf",
        "scores": [
            "1",
            "3",
            "3",
            "4",
            "4",
            "4",
            "3",
            "4",
            "4",
            "2"
        ]
    },
    {
        "name": "Alex Beal",
        "photo": "alex.jpg",
        "scores": [
            "2",
            "3",
            "2",
            "4",
            "2",
            "3",
            "3",
            "3",
            "2",
            "3"
        ]
    },
    {
        "name": "I am a bagel",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bagel-Plain-Alt.jpg/500px-Bagel-Plain-Alt.jpg",
        "scores": [
            "5",
            "3",
            "5",
            "2",
            "4",
            "1",
            "4",
            "2",
            "1",
            "5"
        ]
    },
    {
        "name": "Rob",
        "photo": "d",
        "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "yash",
        "photo": "qwe",
        "scores": [
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2"
        ]
    },
    {
        "name": "Test",
        "photo": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fs90EKnc_Cgg%2Fhqdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Ds90EKnc_Cgg&docid=zgUsraDMRJ4H-M&tbnid=_1TSKPLQnQRDqM%3A&vet=10ahUKEwirwY6kqejcAhWnIjQIHdB5CrkQMwimAigKMAo..i&w=480&h=360&bih=947&biw=1918&q=monkey&ved=0ahUKEwirwY6kqejcAhWnIjQIHdB5CrkQMwimAigKMAo&iact=mrc&uact=8",
        "scores": [
            "2",
            "3",
            "4",
            "4",
            "2",
            "3",
            "5",
            "2",
            "2",
            "4"
        ]
    }
]
