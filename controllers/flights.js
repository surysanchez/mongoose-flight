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
    const newFlight = new Flight();
    //  const dt = newFlight.departs;
    //  let departsDate = `${dt.getFullYear()}-${(dt.getMonth() +1) .toString().padStart(2, '0')}`;
    //  departsDate += `-{dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    //  res.render('flights/new', {departsDate});
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('/flights/new', {
            errorMsg: err.message });
    }
 }
