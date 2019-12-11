/**
 * Service for contact operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Contact = mongoose.model('contacts');

/**
 * Saves and returns the new contact object.
 *
 * @param {Object} contact {contact object}
 */
exports.save = function (contact) {
    const newContact = new Contact(contact);
    const promise = newContact.save();
    return promise;
};