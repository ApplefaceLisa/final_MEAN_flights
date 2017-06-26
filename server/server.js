/**
 * Created by Yajing Li on 6/25/2017.
 */
let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let jsonParser = bodyParser.json();
//var handlerModule = require('./handlers/handlerModule');
let cors = require("cors");
let path = require("path"),
    async = require('async');
    fs = require('fs');
/*
let carrierSchema = require('./db/Carriers');
let carrier = mongoose.model('Carriers', carrierSchema);
let route = require('./db/Routes');
let flight = require('./db/Flights');
*/
let Schema = mongoose.Schema;
let carrierSchema = new Schema({
    carrierName : String
}, { collection: 'Carriers' });
let carriers = mongoose.model('carriers', carrierSchema);

let routeSchema = new Schema({
    carrier : String,
    routes : [{name: String}]
}, { collection : 'Routes' });
let routes = mongoose.model('routes', routeSchema);

let detailsSchema = new Schema({
    carrier : String,
    route : String,
    details : [{
        "ident": String,
        "timestamp": String,
        "longitude": String,
        "latitude": String,
        "groundspeed": String,
        "altitude": String,
        "updateType": String,
        "heading": String,
        "arrivalTime": String
    }]
}, { collection: "flightDetails" });
let flightDetails = mongoose.model('flightDetails', detailsSchema);

let app = express();
app.use(jsonParser);
app.use(cors());

/**
 * Making it to serve the files from the public directory..
 */
app.use(express.static(__dirname + '/public'));

mongoose.connect("mongodb://localhost/myFlightsDB");

app.get('/flights/carriers', function(req, res, next) {
    carriers.find(function(err, data) {
        if (err) {
            res.json(err).status(500);
        } else {
            res.send(data);
        }
    });
});

app.get('/flights/carriers/:carrierName', function(req, res, next) {
    let carrier = req.params.carrierName;
    routes.find({"carrier" : carrier}, function(err, data) {
        if (err) {
            res.json(err).status(500);
        } else {
            res.send(data);
        }
    })
});

app.get('/flights/carriers/:carrierName/:flightName', function(req, res, next) {
    let carrier_name = req.params.carrierName;
    let flight_name = req.params.flightName;
    flightDetails.find({"carrier" : carrier_name, "route":flight_name})
        .limit(20)
        .exec(function(err, data) {
            if (err) {
                res.json(err).status(500);
            } else {
                res.send(data);
            }
        });
});

    app.listen(3000, function() {
    console.log("Server is running...")
});