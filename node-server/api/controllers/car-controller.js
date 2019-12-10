/**
 * Controller for car endpoints.
 */

'use strict';
//import car service.
const carService = require('../services/car-service');
/**
 * Returns a list of cars in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (cars) => {
        response.status(200);
        response.json(cars);
    };
    carService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new car with the request JSON and
 * returns car JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newCar = Object.assign({}, request.body);
    const resolve = (car) => {
        response.status(200);
        response.json(car);
    };
    carService.save(newCar)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a car object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (car) => {
        response.status(200);
        response.json(car);
    };
    carService.get(request.params.id)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a car object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const car = Object.assign({}, request.body);
    const resolve = (car) => {
        response.status(200);
        response.json(car);
    };
    car._id = request.params.carId;
    carService.update(car)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a car object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (car) => {
        response.status(200);
        response.json({
            message: 'Car Successfully deleted'
        });
    };
    carService.delete(request.params.carId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};
/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};