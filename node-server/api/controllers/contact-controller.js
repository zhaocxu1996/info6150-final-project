/**
 * Controller for contact endpoints.
 */

'use strict';
//import contact service.
const contactService = require('../services/contact-service');

/**
 * Creates a new contact with the request JSON and
 * returns contact JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newContact = Object.assign({}, request.body);
    const resolve = (contact) => {
        response.status(200);
        response.json(contact);
    };
    contactService.save(newContact)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};