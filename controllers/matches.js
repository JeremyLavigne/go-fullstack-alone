const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL);
const async = require('async');


//Here, we need an object like : { id : PL_17/18_m1, teamHome: Man U, teamAway: Chelsea}
exports.addMatch = (req, res, next) => {
//   const match = {
//     key: req.body.key,
//     teamHome: req.body.teamHome,
//     teamAway: req.body.teamAway,
//   };
  client.set(req.body.key, req.body.object, function (err, reply){
    if(err){ res.status(400).json(err); }
    console.log('yep')
    res.status(201).json({ create: "Yes", what: req.body.object })
  });
};

exports.getAllMatches = async (req, res, next) => {

    client.keys('*', function (err, keys) {
        if(err){ res.status(400).json(err); }
        if(keys){
            
            async.map(keys, function(key, cb) {
               client.get(key, function (error, match) {
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