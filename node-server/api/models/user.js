'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for sticky object.
 */
let UserSchema = new Schema({
    /**
     * username of the user.
     */
    username: {
        type: String,
        required: "username is required"
    },
    /**
     * password of the user.
    */
    password: {
        type: String,
        required: "password is required"
    },
    /**
     * password of the user.
    */
    balance: {
        type: Number,
        default: 0
    },
    /**
     * Sticky created date.
     */
    createdDate: {
        type: Date,
        default: Date.now
    },
    /**
     * Sticky content.
     */
    content: {
        type: String
    },
    /**
     * Last modified date.
     */
    modifiedDate: {
        type: Date,
        default: Date.now
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

module.exports = mongoose.model('stickies', UserSchema);