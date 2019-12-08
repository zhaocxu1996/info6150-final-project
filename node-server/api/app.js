'use strict';
module.exports = function (app) {
    //Initialize models
    let carModel = require('./models/car');

    //Initialize routes
    let carRoutes = require('./routes/car-route');
    carRoutes(app);
};