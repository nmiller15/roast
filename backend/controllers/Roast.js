'use strict';

var utils = require('../utils/writer.js');
var Roast = require('../service/RoastService.js');

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
  Roast.getUserRoasts(username)
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
  Roast.roastsRoastIdDELETE(roastId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.roastsRoastIdGET = function roastsRoastIdGET (req, res, next, roastId) {
  Roast.roastsRoastIdGET(roastId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.roastsRoastIdPUT = function roastsRoastIdPUT (req, res, next, body, roastId) {
  Roast.roastsRoastIdPUT(body, roastId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
