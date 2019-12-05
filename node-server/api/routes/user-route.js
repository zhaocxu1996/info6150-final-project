/**
 * Sticky endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const userController = require('../controllers/user-controller');
    // Sticky Routes for search and create.
    app.route('/users')
        .get(userController.list)
        .post(userController.post);

    // Sticky Routes for get, update and delete.
    app.route('/users/:userId')
        .get(userController.get)
        .put(userController.put)
        .delete(userController.delete);
};