var express = require('express');
var router = express.Router();
  var flightsCtrl = require('../controllers/flights');


 router.get('/', function(req, res, next) {
     res.render('index', { title: 'Mongoose Flights' });
  });
  

module.exports = router;
