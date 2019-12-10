'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose Car for car object.
 */
let CarSchema = new Schema({
    /**
     * Brand of the car.
     */
    // title: {
    //     type: String,
    //     required: "title is required"
    // },

    brand:{
       type:String,
       default:0

    },

    model:{
        type:String,
        default:0
    },

    // createdDate: {
    //     type: Date,
    //     default: Date.now
    // },


    /**
     * Car content.
     */
    location: {
        type: String,
        default:0
    },
    /**
     * Last modified date.
     */

}, {
    versionKey: false
});
// Duplicate the id field as mongoose returns _id field instead of id.
CarSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
CarSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('cars', CarSchema);