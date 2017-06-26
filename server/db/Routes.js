/**
 * Created by Yajing Li on 6/25/2017.
 */
let mongoose = require("mongoose");
let route = mongoose.model('route', {
    carrier : String,
    routes : [{name: String}]
});
module.exports = route;