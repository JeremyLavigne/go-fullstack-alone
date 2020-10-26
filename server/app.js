const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());

app.get('/api/matches', (req, res, next) => {
    res.json("Oh yes we can! Oh no, it was no waste of time!")
});

module.exports = app;