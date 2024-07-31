'use strict';
const query = require("../database/db");
const insertStatement = require('../utils/insertStatement');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Create a new user
 * Add a new user to the database
 *
 * body User Add a new user to the database
 * returns User
 **/
// TODO: Check this operation!
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
// TODO: Check this operation!
exports.getAllUsers = function() {
  return new Promise(function(resolve, reject) {
    query('SELECT * FROM users')
      .then((response) => {
        if (response.rows.length === 0) {
          return reject('No users found.');
        }
        resolve(response.rows);
      })
      .catch(e => reject(e));
  });
};


/**
 * Get user profile by username
 * Must be logged in as the user to recieve the user.
 *
 * username String Username of the owner of a list of roasts
 * returns User
 **/
exports.getUserByUsername = function(username) {
  return new Promise(function(resolve, reject) {
    query('SELECT * FROM users WHERE username = $1', [username])
      .then((response) => {
        if (response.rows.length === 0) return reject('No user found.')
        resolve(response.rows[0])
      }).catch(e => reject(e));
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
    query('SELECT username, password FROM users WHERE username = $1', [body.username])
      .then((response) => {
        if (response.rows.length === 0) {
          return reject('No user found with that username.');
        }
        const hashedPassword = response.rows[0].password;
        return bcrypt.compare(body.password, hashedPassword);
      })
      .then((isMatch) => {
        if (isMatch) {
          // Generate JWT token
          const token = jwt.sign({ username: body.username }, JWT_SECRET, { expiresIn: '1h' });
          resolve({ token });
        } else {
          reject('Invalid password.');
        }
      })
      .catch(e => reject(e));
  });
};


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
    query('DELETE from users WHERE username = $1', [username])
      .then((response) => {
        if (response.rowCount === 0) return reject('Not removed.')
        resolve(response)
      })
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
    const { text, values } = updateStatement(body, "users", username)

    query(text, values).then((response) => {
      if (response.rowCount == 0) return reject('No user found with that username')
      resolve(response.rows[0]);
    }).catch(e => reject(e))
  });
}

