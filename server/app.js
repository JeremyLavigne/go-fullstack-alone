const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('request sent.')
    next();
});

app.use('/', (req, res, next) => {
    res.json({mess: "We are fine."})
});

module.exports = app;