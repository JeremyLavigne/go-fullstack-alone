const bcrypt = require('bcrypt');
const redis = require('redis');
const async = require('async');
const jwt = require('jsonwebtoken');

let client;

if (process.env.NODE_ENV === 'test') {
    client = redis.createClient();
    console.log('Test database');
} else {
    client = redis.createClient(process.env.REDIS_URL);
}

client.on('connect', (error) => {
    if (error) { console.log(error); }
    console.log('Connected to Redis (User)');
});

// Generate random ID
const generateID = () => Math.floor(Math.random() * Math.floor(1000000));

// Routes

exports.signup = (req) => {
    let user;
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            user = {
                email: req.body.email,
                password: hash,
            };
        })
        .then(() => {
            const key = `user-${generateID()}`;
            client.hmset(key, user, (err) => {
                if (err) { console.log(err); }
                console.log(key, 'created');
            });
        });
};

// No solutions for a non existing user (wrong mail).
// Definitely something I miss regarding async with Redis :p
exports.login = (req, res) => {
    client.keys('user-*', (err, keys) => {
        if (err) { res.status(400).json(err); }
        if (keys) {
            async.map(keys, (key, cb) => {
                client.HGETALL(key, (error, user) => {
                    if (error) { res.status(400).json(error); }
                    cb(null, { key, user });
                });
            }, (error, users) => {
                if (error) { res.status(400).json(err); }
                // users is an Array [u1, u2, u3]
                for (let i = 0; i < users.length; i += 1) {
                    if (users[i].user.email === 'test@post.com') { // req.body.email
                        bcrypt.compare('myPass', users[i].user.password) // req.body.pass
                            // eslint-disable-next-line no-loop-func
                            .then((valid) => {
                                if (!valid) {
                                    return res.status(401).json({ error: 'Password incorrect !' });
                                }
                                res.status(200).json({
                                    userId: users[i].key,
                                    token: jwt.sign(
                                        { userId: users[i].key },
                                        'RANDOM_TOKEN_SECRET',
                                        { expiresIn: '24h' },
                                    ),
                                });
                            })
                            .catch((erro) => res.status(500).json({ erro }));
                    }
                }
            });
        }
    });
};

// ============================= Hand tries on DB ==========================

// Add a user : just uncomment this bloc

// let user;
// bcrypt.hash('myPass2', 10)
//     .then((hash) => {
//         user = {
//             email: 'test2@post.com',
//             password: hash,
//         };
//     })
//     .then(() => {
//         const key = `user-${generateID()}`;
//         client.hmset(key, user, (err) => {
//             if (err) { console.log(err); }
//             console.log(key, 'created');
//         });
//     });
