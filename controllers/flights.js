const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show
};



async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', {title: 'Flight Detail', flight});
}

// render the views/flights/index 
async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights' , flights });
  }

 function newFlight(req, res) {
     res.render('flights/new', { errorMsg: ''});
 }

 async function create(req, res) {
       console.log(req.body)
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('/flights/new', {
            errorMsg: err.message });
    }
 }
