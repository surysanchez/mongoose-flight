const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum:['American', 'Southwest', 'United', 'Qatar']
    }, 
    airport: {
        type: String,
        enum:['AUS','SAN', 'DEN', 'MIA', 'LAX'],
        default: 'MIA'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999

    }, departs: {
         type: Date,
        //  default: function(req, res, next) {
        //  res.locals.date = new Date().toLocaleDateString();
        //      next();
        default: function() {
             const yearFromDate = new Date();
             yearFromDate.setFullYear(yearFromDate.getFullYear()+ 1);
             return yearFromDate;
         }
      }
 }, {
    timestamps: true
 });

module.exports = mongoose.model('Flight', flightSchema);