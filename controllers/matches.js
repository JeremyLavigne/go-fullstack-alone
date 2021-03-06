let client;
const redis = require('redis');

if (process.env.NODE_ENV === 'test') {
    client = redis.createClient();
    console.log('Test database');
} else {
    client = redis.createClient(process.env.REDIS_URL);
}

client.on('connect', (error) => {
    if (error) { console.log(error); }
    console.log('Connected to Redis (Matches)');
});

const async = require('async');

// Routes

exports.getAllMatches = async (req, res) => {
    client.keys('match-*', (err, keys) => {
        if (err) { res.status(400).json(err); }
        if (keys) {
            async.map(keys, (key, cb) => {
                client.HGETALL(key, (error, match) => {
                    if (error) { res.status(400).json(error); }
                    cb(null, { key, match });
                });
            }, (error, matches) => {
                if (error) { res.status(400).json(err); }
                res.status(200).send(matches); // Send as an Array [m1, m2, m3]
            });
        }
    });
};

process.on('exit', () => {
    console.log('client log out.');
    client.quit();
});

// ============================= Fill the database - POST ==========================

// Only used **ONCE** to fill the database - No routes leading here

// BE CAREFUL, Uncomment this and save file add automatically all objects !

// const plMatchesList = require('./temporyDB');

// Just put i < 380 to get the whole championship

// for (let i = 0; i < 380; i += 1) {
//     const key = `match-PL1718-${i + 1}`;
//     const newMatch = plMatchesList[i];
//     client.hmset(key, newMatch, (err) => {
//         if (err) { console.log(err); }
//         console.log(key, 'created');
//     });
// }

// ============================= Empty the database - DELETE ==========================

// Only used in case of need to empty the database - No routes leading here

// BE CAREFUL, Uncomment this and save file erase all the matching keys !

// client.keys('match-*', (err, keys) => {
//     if (err) { console.log(err); }
//     if (keys) {
//         async.map(keys, (key) => {
//             client.del(key, (error) => {
//                 if (err) { console.log(error); }
//             });
//         });
//     }
// });
