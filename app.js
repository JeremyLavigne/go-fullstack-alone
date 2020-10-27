// ---------------------- Variables -----------------------
const express = require('express');
const redis = require('redis');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// ---------------------- Redis DB -----------------------
const client = redis.createClient(process.env.REDIS_URL);

client.on("error", function(error) {
    console.error(error);
});
client.on("connect", function(error) {
    console.log("Connected to Relis");
});


// ---------------------- app.use -----------------------
app.use(cors());
app.use(bodyParser.json());

// This retrieve all the keys -> Only way I have to see what is in my db..
client.keys('*', function(err, reply) {
         console.log(reply);
});

// client.get('framework', function(err, reply) {
//     console.log(reply);
// });


// Routes
// app.get('/api/matches', (req, res, next) => {
//     //res.json("Oh yes we can! Oh no, it was no waste of time!")
//     var redisKey = req.query.redisKey

//     client.get(redisKey, function (err, reply) {
//       if(err){ res.status(400).json(err); }
//       res.status(200).json(reply);
//     });
// });

// app.post('/api/matches', function(req, res){
//     var redisKey = req.query.redisKey,
//         redisValue = req.query.redisValue
//         // assuming value is also a string in URL query string
  
//     client.set(redisKey, redisValue, function (err, reply){
//       res.status(200).send(reply.toString())
//     });
// })


// Deployment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
    })
}

module.exports = app;