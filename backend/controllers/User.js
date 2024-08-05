'use strict';

var utils = require('../utils/writer.js');
var objectKeysToCamel = require('../utils/objectKeysToCamel.js');
var User = require('../service/UserService.js');
var db = require('../database/db.js');

module.exports.createUser = function createUser (req, res, next, body) {
  User.createUser(body)
    .then(function (response) {
      // Handle user creation error
      if (response.name === 'error') throw new Error(response);

      // Log in the user after a successful creation
      return module.exports.loginUser(req, res, next, body)
    })
    .catch(function (response) {
      console.log(response);
      utils.writeJson(res, response, 400);
    });
};

module.exports.getAllUsers = function getAllUsers (req, res, next) {
  User.getAllUsers()
  .then(function (response) {
    utils.writeJson(res, response);
  })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
  };
  
  module.exports.getUserByUsername = function getUserByUsername (req, res, next, username) {
    User.getUserByUsername(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
  };
  
  module.exports.loginUser = function loginUser (req, res, next, body) {
    User.loginUser(body)
    .then(function (response) {
      req.session.user = objectKeysToCamel(response.user);
      res.cookie('token', response.token).json(req.session.user);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
  };
  

module.exports.logoutUser = function logoutUser (req, res, next) {
  const sid = req.sessionID;
  req.session.destroy(function (err) {
    if (err || req.session) res.sendStatus(500);
    db.store.destroy(sid, function (err){
      if (err) res.sendStatus(500);
      res.cookie('token', '').cookie('connect.sid', '').sendStatus(200);
    })
  });
};

module.exports.removeUserByUsername = function removeUserByUsername (req, res, next, username) {
  User.isAuthenticated(req, username)
    .then((isAuth) => {
      if (!isAuth) throw new Error('Unauthorized')
      return User.removeUserByUsername(username)
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

module.exports.updateUserByUsername = function updateUserByUsername (req, res, next, body, username) {
  User.isAuthenticated(req, username)
    .then((isAuth) => {
      if (!isAuth) throw new Error('Unauthorized')
        return User.updateUserByUsername(body, username)
    })
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      console.log('caught');
      if (response.message == "Unauthorized") {
        utils.writeJson(res, response.message, 401)
      } else {
        utils.writeJson(res, response.message);
      }
    });
};
