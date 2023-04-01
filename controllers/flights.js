const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
};

// render the views/flights/index 
// not sure if inside find({}) ???
async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
  }

 function newFlight(req, res) {
     res.render('flights/new', { errorMsg: ''});
 }

 async function create(req, res) {
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('/flights/new', {
            errorMsg: err.message });
    }
 }
