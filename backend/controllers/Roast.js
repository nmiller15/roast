'use strict';

var utils = require('../utils/writer.js');
var Roast = require('../service/RoastService.js');
var User = require('../service/UserService.js');

module.exports.addRoast = function addRoast (req, res, next, body) {
  Roast.addRoast(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserRoasts = function getUserRoasts(req, res, next, username) {
  User.isAuthenticated(req, username)
    .then((isAuth) => {
      if (!isAuth) throw new Error('Unauthorized')
      return Roast.getUserRoasts(username)
    })
    .then(function (response) {
      if (!response) utils.writeJson(res, response, 404);
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      // Handle no user found.
      utils.writeJson(res, response, 404);
    });
};

module.exports.roastsRoastIdDELETE = function roastsRoastIdDELETE (req, res, next, roastId) {
  
  Roast.roastsRoastIdGET(roastId)
  .then((response) => {
    return response.username;
  })
  .then((username) => {
    return User.isAuthenticated(req, username)
  })
  .then((isAuth) => {
      if (!isAuth) throw new Error('Unauthorized')
      return Roast.roastsRoastIdDELETE(roastId) 
    })
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      if (response.message == "Unauthorized") {
        utils.writeJson(res, response.message, 401)
      } else {
        utils.writeJson(res, response);
      }
    });
};

module.exports.roastsRoastIdGET = function roastsRoastIdGET (req, res, next, roastId) {
  var roast = {} 
  Roast.roastsRoastIdGET(roastId)
    .then((response) => {
      roast = response;
      return response.username;
    })
    .then((username) => {
      return User.isAuthenticated(req, username)
    })
    .then((isAuth) => {
      if (!isAuth) throw new Error('Unauthorized')
      utils.writeJson(res, roast)
    })
    .catch(function (response) {
      if (response.message == "Unauthorized") {
        utils.writeJson(res, response.message, 401)
      } else {
        utils.writeJson(res, response, 404);
      }
    });
};

module.exports.roastsRoastIdPUT = function roastsRoastIdPUT (req, res, next, body, roastId) {
  Roast.roastsRoastIdGET(roastId)
    .then((response) => {
      return response.username;
    })
    .then((username) => {
      return User.isAuthenticated(req, username)
    })
    .then((isAuth) => {
      if (!isAuth) throw new Error('Unauthorized')
      return Roast.roastsRoastIdPUT(roastId) 
    })
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      if (response.message == "Unauthorized") {
        utils.writeJson(res, response.message, 401)
      } else {
        utils.writeJson(res, response, 404);
      }
    });
};
