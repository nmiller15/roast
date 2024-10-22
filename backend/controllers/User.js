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
      utils.writeJson(res, response, 201);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.getAllUsers = function getAllUsers (req, res, next) {
  if (!req.session.user.isAdmin) throw new Error('Unauthorized')
  User.getAllUsers()
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
  
  module.exports.getUserByUsername = function getUserByUsername (req, res, next, username) {
    User.isAuthenticated(req, username)
    .then((isAuth) => {
      if (!isAuth) throw new Error('Unauthorized')
      return User.getUserByUsername(username)
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
  
  module.exports.loginUser = function loginUser (req, res, next, body) {
    User.loginUser(body)
    .then(function (response) {
      req.session.user = objectKeysToCamel(response.user);
      const cookieOptions = {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
	secure: true
      }
      res.cookie('token', response.token, cookieOptions).json(req.session.user);
    })
    .catch(function (response) {
      // console.log('caught', response);
      utils.writeJson(res, response, 400);
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
