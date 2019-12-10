/**
 * Service for car operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Car = mongoose.model('cars');

/**
 * Returns an array of car object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Car.find(params).exec();
    return promise;
};

/**
 * Saves and returns the new car object.
 *
 * @param {Object} car {Car object}
 */
exports.save = function (car) {
    const newCar = new Car(car);
    const promise = newCar.save();
    return promise;
};

/**
 * Returns the car object matching the id.
 *
 * @param {string} carId {Id of the car object}
 */
exports.get = function (carId) {
    const promise = Car.findById(carId).exec();
    return promise
};

/**
 * Updates and returns the car object.
 *
 * @param {Object} car {Car object}
 */
exports.update = function (car) {
    car.modified_date = new Date();
    const promise = Car.findOneAndUpdate({_id: car._id}, car).exec();
    return promise;
};

/**
 * Deletes the car object matching the id.
 *
 * @param {string} carId {Id of the car object}
 */
exports.delete = function (carId) {
    const promise = Car.remove({_id: carId});
    return promise;
};