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
    console.log("Connected to Redis");
});


// ---------------------- app.use -----------------------
app.use(cors());
app.use(bodyParser.json());

// Routes
const matchesRoutes = require('./routes/matches');

app.use('/api/matches', matchesRoutes);


// Deployment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
    })
}

module.exports = app;