/**
 * Created by Yajing Li on 6/25/2017.
 */
let mongoose = require("mongoose");
let flight = mongoose.model('flight', {
    ident: String,
    timestamp: String,
    longitude: String,
    latitude: String,
    groundspeed: String,
    altitude: String,
    updateType: String,
    heading: String,
    arrivalTime: String
});

module.exports = flight;