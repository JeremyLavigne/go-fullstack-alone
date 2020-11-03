// ---------------------- Variables -----------------------
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
// const proxy = require('express-http-proxy');

const app = express();

// ---------------------- app.use -----------------------
app.use(cors());
// app.use('/api/auth', proxy('http://localhost:3000/api/auth'));
app.use(bodyParser.json());

// Routes
const matchesRoutes = require('./routes/matches');
const userRoutes = require('./routes/users');

app.use('/api/matches', matchesRoutes);
app.use('/api/auth', userRoutes);

// Deployment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
    });
}

module.exports = app;
