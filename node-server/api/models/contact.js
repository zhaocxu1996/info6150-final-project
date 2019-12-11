'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose Car for car object.
 */
let ContactSchema = new Schema({
    /**
     * Brand of the car.
     */
    title: {
        type: String,
        required: "title is required"
    },

    firstName:{
        type:String
    },
    lastName:{
        type:String
    },

    // createdDate: {
    //     type: Date,
    //     default: Date.now
    // },
    email: {
      type: String
    },
    phone: {
        type: String
    },
    zip: {
        type: String
    },
    options: {
        type: String
    },
    comments: {
        type: String
    },
    hearFrom: {
        type: String
    }
}, {
    versionKey: false
});
// Duplicate the id field as mongoose returns _id field instead of id.
ContactSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ContactSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('contacts', ContactSchema);