var express = require('express');
var router = express.Router();
// Require the controller that export CRUD functions
var flightsCrtl = require('../controllers/flights');


// GET /flights
router.get('/', flightsCrtl.index);

// GET /flights/new
router.get('/new', flightsCrtl.new);

// POST /flights
router.post('/', flightsCrtl.create);

// GET /flights/:id/edit
// router.get('/:id')

module.exports = router;



