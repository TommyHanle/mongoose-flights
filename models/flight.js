const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'Alaska', 'United', 'Jet Blue']
    },
    airport: {
        type: String,
        enum: ['SNA', 'DEN', 'DFW', 'ORD', 'SFO', 'LAX', 'JFK', 'ATL'],
        default: 'SNA'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
    }    
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);