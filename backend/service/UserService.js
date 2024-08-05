'use strict';
const db = require('../database/db');
const insertStatement = require('../utils/insertStatement');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
require('dotenv').config();
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
  return new Promise((resolve, reject) => {
    // Hash the password asynchronously
    bcrypt.hash(body.password, saltRounds, function(err, hash) {
      if (err) return reject(err);

      // Replace the plain text password with the hashed password
      body.password = hash;

      // Generate the SQL insert statement
      const { text, values } = insertStatement("users", body);

      // Execute the database query
      db.query(text, values)
        .then((response) => {
          if (response.rowCount === 0) return reject('Not added.');
          resolve(response.rows[0]);
        })
        .catch(e => reject(e));
    });
  });
};



/**
 * Get all users
 * Can only be accessed by admin users
 *
 * returns UsersArray
 **/
// TODO: Check this operation!
exports.getAllUsers = function() {
  return new Promise(function(resolve, reject) {
    db.query('SELECT * FROM users')
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
 * Must be logged in as the user to receive the user.
 *
 * username String Username of the owner of a list of roasts
 * returns User
 **/
// TODO: Check this operation!
exports.getUserByUsername = function(username) {
  return new Promise(function(resolve, reject) {
    db.query('SELECT * FROM users WHERE username = $1', [username])
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
    db.query('SELECT * FROM users WHERE username = $1', [body.username])
    .then((response) => {
      if (response.rowCount === 0) {
        return reject('No user found with that username.');
      }
      body.response = response;
      const hashedPassword = response.rows[0].password;
      return bcrypt.compare(body.password, hashedPassword), response;
    })
    .then((isMatch) => {
      if (isMatch) {
        // Generate JWT token
        const token = jwt.sign({ username: body.username }, JWT_SECRET, { expiresIn: '24h' });
        resolve({token, user: body.response.rows[0]});
      } else {
        reject('Invalid password.');
      }
    })
    .catch(e => reject(e));
  });
};


/**
 * Remove user profile by username
 * Must be logged in as the user or admin to delete user.
 *
 * username String Username of the owner of a list of roasts
 * isAdmin boolean property of user currently in session
 * returns User
 **/
exports.removeUserByUsername = function(username) {
  return new Promise(function(resolve, reject) {
    db.query('DELETE from users WHERE username = $1', [username])
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
// TODO: Check this operation!
exports.updateUserByUsername = function(body,username) {
  return new Promise(function(resolve, reject) {
    const { text, values } = updateStatement(body, "users", username)

    db.query(text, values).then((response) => {
      if (response.rowCount == 0) return reject('No user found with that username')
      resolve(response.rows[0]);
    }).catch(e => reject(e))
  });
}

/**
 * Checks session and username for a match to provide authentication to a resource
 * Is current user owner or admin?
 *
 * req Object Request of the user making the request
 * username String username of the owner of a resource
 * returns Boolean
 **/
// TODO: Check this operation!
exports.isAuthenticated = function(req, username) {
  return new Promise(function(resolve, reject) {
    if (!req.session.user) {
      console.log(`AUTH \x1b[31mDENIED\x1b[30m no user in session`)
      resolve(false)
    }
    if (req.session.user.username == username || req.session.user.isAdmin) {
      console.log(`AUTH ${req.session.user.username}\x1b[30m ${req.session.user.isAdmin ? 'isAdmin' : 'matched user'}\x1b[97m`)
      const { token } = req.cookies;
      jwt.verify(token, process.env.JWT_SECRET, {}, (err, info) => {
        if (err) return new Error(err);
        if (info.username == req.session.user.username) {
          console.log(`AUTH ${req.session.user.username} \x1b[32mAPPROVED\x1b[30m valid token`)
          resolve(true);
        } else {
          console.log(`AUTH ${req.session.user.username} \x1b[31mDENIED\x1b[30m invalid token`)
          resolve(false);
        }
      })
      return;
    }
    console.log(`AUTH ${req.session.user.username} \x1b[31mDENIED\x1b[30m`)
    resolve(false);
  })
}

