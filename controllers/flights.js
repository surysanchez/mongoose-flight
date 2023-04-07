const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    delete: deleteFlight,
    createTicket
};

 async function show(req, res) {
     const flight = await Flight.findById(req.params.id)
     const ticket = await Ticket.find({flight: flight._id});
    res.render('flights/show', {title: 'Flight Detail', flight , ticket});
   
 }

// render the views/flights/index 
async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights' , flights });
  }

 function newFlight(req, res) {
     res.render('flights/new', {  title: 'New Flight', errorMsg: ''});
 }

 async function create(req, res) {
       console.log(req.body)
       const newFlight = new Flight();
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('/flights/new', {
            errorMsg: err.message });
    }
 }

  async function deleteFlight(req, res) {
        const flight = await Flight.findByIdAndDelete(req.params.id)
         res.redirect('/flights')
  }

   async function createTicket(req, res) {
     const ticket = await Ticket.findById(req.params.id);
     try {
         await Ticket.create(req.body);
         res.redirect(`/flights/${movie._id}`);
     } catch (err) {
        console.log(err)
   }
   res.redirect('/flights/show')
 }