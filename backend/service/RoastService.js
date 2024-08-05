'use strict';
const db = require('../database/db');
const insertStatement = require('../utils/insertStatement');
const updateStatement = require('../utils/updateStatement');


/**
 * Create a new roast
 * Must include a valid roast object
 *
 * body Roast 
 * returns Roast
 **/
exports.addRoast = function(body) {
  return new Promise(function(resolve, reject) {
    const { text, values } = insertStatement('roasts', body);
    db.query(text, values)
    .then(response => {
      if (response.rowCount === 0) {
        return reject('Not added.');
      }
      resolve(response.rows[0]); // Or adjust based on what you want to return
    })
    .catch(e => reject(e));
  });
};


/**
 * Get list of roasts by username
 * Must include a valid username
 *
 * username String Username of the owner of a list of roasts
 * returns RoastArray
 **/
exports.getUserRoasts = async function(username) {
  return new Promise((resolve, reject) => {
    // db.query('SELECT id FROM users WHERE username = $1;', [username])
    //   .then((response) => {
    //     if (response.rowCount == 0) {
    //       reject('User not found.')
    //     }
    //     const userId = response.rows[0].id;  // use correct column name
    //     return db.query('SELECT * FROM roasts WHERE user_id = $1;', [userId]);
    //   })
    //   .then((roastQueryResponse) => {
    //     resolve(roastQueryResponse.rows);
    //   })
    //   .catch((error) => {
    //     reject(error);
    //   });
    db.query('SELECT roasts.*, users.username FROM roasts JOIN users ON roasts.user_id = users.id WHERE username = $1;', [username])
      .then((response) => {
        if (response.rowCount == 0) {
          return reject('No roasts found.')
        }
        resolve(response.rows);
      }).catch(e => reject(e));
  });
};


/**
 * Delete roast by id
 * Can only be performed by a logged in user who owns the identified roast
 *
 * roastId Integer An integer that matches an id of a roast
 * returns Roast
 **/
exports.roastsRoastIdDELETE = function(roastId) {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM roasts WHERE id = $1;', [roastId])
      .then((response) => {
        resolve(response);
      }).catch(e => reject(e));
  })
}


/**
 * Get roast by id
 * Must include a valid roast id
 *
 * roastId Integer An integer that matches an id of a roast
 * returns Roast
 **/
exports.roastsRoastIdGET = function(roastId) {
  return new Promise(function(resolve, reject) {
    db.query('SELECT roasts.*, users.username FROM roasts JOIN users ON roasts.user_id = users.id WHERE roasts.id = $1', [roastId])
      .then((response) => {
        if (response.rows.length === 0) {
          return reject('No roast found with that ID.');
        }
        resolve(response.rows[0])
      }).catch(e => reject(e))
  });
}


/**
 * Update roast by id
 * Can only be performed by a logged in user who owns the identified roast
 *
 * body Roast 
 * roastId Integer An integer that matches an id of a roast
 * returns Roast
 **/
// TODO: Check this operation!
exports.roastsRoastIdPUT = function(body, roastId) {
  return new Promise(function(resolve, reject) {
    const { text, values } = updateStatement(body, 'roasts', roastId);
    db.query(text, values)
      .then((response) => {
        if (response.rowCount === 0) {
          return reject('No roast found with that ID.');
        }
        resolve(response.rows[0]);
      })
      .catch(e => reject(e));
  });
};


