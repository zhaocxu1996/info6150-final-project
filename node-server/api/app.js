'use strict';
module.exports = function (app) {
    //Initialize models
    let stickyModel = require('./models/user');

    //Initialize routes
    let stickyRoutes = require('./routes/user-route');
    stickyRoutes(app);
};