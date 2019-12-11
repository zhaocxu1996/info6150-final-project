'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for sticky object.
 */
let UserSchema = new Schema({
    /**
     * Username of the user.
     */
    username: {
        type: String,
        required: "username is required"
    },
    /**
     * Password of the user.
     */
    password: {
        type: String,
        required: "password is required"
    },
    /**
     * User contact.
     */
    contact: {
        type: String
    },
    /**
     * User address.
     */
    address: {
        type: String
    },
    /**
     * User email.
     */
    email: {
        type: String
    },
    /**
     * The id of car that user rented
     */
    car: {
        type: String,
        default: null
    }
}, {
    versionKey: false
});
// Duplicate the id field as mongoose returns _id field instead of id.
UserSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
UserSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('user', UserSchema);