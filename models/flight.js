const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema  = new Schema({
    airport: {
        type: String,
        required: true,
        enum: ['AUS','SAN', 'DEN', 'MIA', 'LAX'],
        default: () => Date.now(),
    }, 
    arrival: {
        type: Date,
        required: true,
    }
}, {
     timestamps: true
})


const flightSchema = new Schema({
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
         default: function() {
            const yearFromDate = new Date();
            yearFromDate.setFullYear(yearFromDate.getFullYear() + 1);
            return yearFromDate;
        }
         
        // default: function() {
        //      const yearFromDate = new Date();
        //     //   yearFromDate.toLocaleDateString();
        //  }
      },
       tickets: {
          type: Schema.Types.ObjectId,
          ref: 'Ticket'
    
       },
      destinations: [destinationSchema]
 }, {
     timestamps: true
 });

module.exports = mongoose.model('Flight', flightSchema);// don't need to attached destinationsSchema