const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// POST / flights/:id/destinations
router.post('/flights/:id/destinations', destinationsCtrl.addDestination);

module.exports = router;