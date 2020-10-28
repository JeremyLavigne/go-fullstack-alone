const client = require('redis').createClient(process.env.REDIS_URL);
const async = require('async');


exports.getAllMatches = async (req, res, next) => {

    client.keys('match-*', function (err, keys) {
        if(err){ res.status(400).json(err); }
        if(keys){
            
            async.map(keys, function(key, cb) {
               client.HGETALL(key, function (error, match) {
                    if(err){ res.status(400).json(err); }
                    cb(null, {key: key, object: match});
                }); 
                
            }, function (err, matches) {
                if(err){ res.status(400).json(err); }
                res.send(matches); // Send as an Array [m1, m2, m3]
            });
        }
    });

};

// ============================= Fill the database - POST ==========================

// Only used **ONCE** to fill the database - No routes leading here

// BE CAREFUL, Uncomment this and save file add automatically all objects !

// for (let i = 0; i < 5; i++) {
//     const key = `match-PL1718-${i}`;
//     const newMatch = { 
//         teamHome: `Home Team ${i}`,
//         teamAway: `Away Team ${i}`,
//     }
//     client.hmset(key, newMatch, function (err, reply){
//         if(err) { console.log(err); }
//         console.log(key, 'created');
//     });
// }

// ============================= Empty the database - DELETE ==========================

// Only used in case of need to empty the database - No routes leading here

// BE CAREFUL, Uncomment this and save file erase all the matching keys !

// client.keys('match-*', function (err, keys) {
//     if(err){ res.status(400).json(err); }
//     if(keys){
        
//         async.map(keys, function(key) {
//            client.del(key, function (error, match) {
//                 if(err){ console.log(err); }
//             }); 
//         });       
//     }
// });