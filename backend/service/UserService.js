'use strict';
const query = require("../database/db");
const insertStatement = require('../utils/insertStatement');

/**
 * Create a new user
 * Add a new user to the database
 *
 * body User Add a new user to the database
 * returns User
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    const { text, values } = insertStatement("users", body);

    query( text, values ).then((response) => {
      if (response.rowCount === 0) return reject('Not added.')
      resolve(response.rows[0])
    }).catch(e => reject(e))
  });
}


/**
 * Get all users
 * Can only be accessed by admin users
 *
 * returns UsersArray
 **/
exports.getAllUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "John",
  "lastName" : "James",
  "password" : "12345",
  "permission" : "admin",
  "id" : 10,
  "email" : "john@email.com",
  "username" : "theUser"
}, {
  "firstName" : "John",
  "lastName" : "James",
  "password" : "12345",
  "permission" : "admin",
  "id" : 10,
  "email" : "john@email.com",
  "username" : "theUser"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user profile by username
 * Must be logged in as the user to recieve the user.
 *
 * username String Username of the owner of a list of roasts
 * returns User
 **/
exports.getUserByUsername = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "John",
  "lastName" : "James",
  "password" : "12345",
  "permission" : "admin",
  "id" : 10,
  "email" : "john@email.com",
  "username" : "theUser"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs an existing user into the system
 *
 * body User_login_body 
 * returns String
 **/
exports.loginUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs out current logged in user session
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Remove user profile by username
 * Must be logged in as the user or admin to delete user.
 *
 * username String Username of the owner of a list of roasts
 * returns User
 **/
exports.removeUserByUsername = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "John",
  "lastName" : "James",
  "password" : "12345",
  "permission" : "admin",
  "id" : 10,
  "email" : "john@email.com",
  "username" : "theUser"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update user profile by username
 * Must be logged in as the user or admin to update user.
 *
 * body User 
 * username String Username of the owner of a list of roasts
 * returns User
 **/
exports.updateUserByUsername = function(body,username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "John",
  "lastName" : "James",
  "password" : "12345",
  "permission" : "admin",
  "id" : 10,
  "email" : "john@email.com",
  "username" : "theUser"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

