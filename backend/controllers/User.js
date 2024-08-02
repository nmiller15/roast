'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService.js');
var db = require('../database/db.js')

module.exports.createUser = function createUser (req, res, next, body) {
  User.createUser(body)
    .then(function (response) {
      // Handle user creation error
      if (response.name === 'error') throw new Error(response);

      // Log in the user after a successful creation
      return loginUser(req, res, next, body)
    })
    .catch(function (response) {
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
      req.session.user = response.user
      res.cookie('token', response.token).json(response.user);
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
  User.removeUserByUsername(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUserByUsername = function updateUserByUsername (req, res, next, body, username) {
  User.updateUserByUsername(body, username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
