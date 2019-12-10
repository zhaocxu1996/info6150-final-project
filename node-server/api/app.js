'use strict';
module.exports = function (app) {
    
    let stickyModel = require('./models/user');
    //Initialize routes
    let stickyRoutes = require('./routes/user-route');
    stickyRoutes(app);

    let carModel = require('./models/car');
    //Initialize routes
    let carRoutes = require('./routes/car-route');
    carRoutes(app);
};