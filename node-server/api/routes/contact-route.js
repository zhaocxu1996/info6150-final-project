/**
 * contact endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const contactController = require('../controllers/contact-controller');
    // contact Routes for search and create.
    app.route('/contacts')
        .post(contactController.post);
};