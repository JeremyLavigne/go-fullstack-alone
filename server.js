const http = require('http');
const express = require('express');
const cors = require('cors')
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.set('port', port);
const server = http.createServer(app);

app.get('/api/matches', (req, res, next) => {
    res.json("Oh yes we can! Oh no, it was no waste of time!")
});


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
    })
}


server.on('listening', () => {
    console.log('listening on ' + port);
});
 
server.listen(port);