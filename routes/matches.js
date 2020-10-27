const express = require('express');
const router = express.Router();

const matchesCtrl = require('../controllers/matches');

router.get('/', matchesCtrl.getAllMatches);
router.post('/', matchesCtrl.addMatch); // Only used for fill the database

module.exports = router;