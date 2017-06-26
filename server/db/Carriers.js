/**
 * Created by Yajing Li on 6/25/2017.
 */
let mongoose = require("mongoose");
let carrier = mongoose.model('Carriers' ,{
    carrierName : String
});

module.exports = new carrier;
module.exports.carrierSchema = carrierSchema;