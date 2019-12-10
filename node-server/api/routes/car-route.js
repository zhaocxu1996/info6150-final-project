/**
 * Car endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const carController = require('../controllers/car-controller');
    // Car Routes for search and create.
    app.route('/cars')
        .get(carController.list)
        .post(carController.post);

    // Car Routes for get, update and delete.
    app.route('/cars/:id')
        .get(carController.get)
        .put(carController.put)
        .delete(carController.delete);
};