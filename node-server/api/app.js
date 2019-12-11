'use strict';
module.exports = function (app) {
    let userModel = require('./models/user');

    //Initialize routes
    let userRoutes = require('./routes/user-route');
    userRoutes(app);

    let carModel = require('./models/car');
    //Initialize routes

    let carRoutes = require('./routes/car-route');
    carRoutes(app);

    let contactModel = require('./models/contact');
    //Initialize routes

    let contactRoutes = require('./routes/contact-route');
    contactRoutes(app);
};