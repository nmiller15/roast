'use strict';
const query = require('../database/db');
const insertStatement = require('../utils/insertStatement');
const updateStatement = require('../utils/updateStatement');


/**
 * Create a new roast
 * Must include a valid roast object
 *
 * body Roast 
 * returns Roast
 **/
// TODO: Check this operation!
exports.addRoast = function(body) {
  return new Promise(function(resolve, reject) {
    query(insertStatement(body, 'roasts'))
      .then((response) => {
        if (!response) return reject('Not added.');
        resolve(response);
      }).catch((e) => {
        reject(e)
      })
  });
}


/**
 * Get list of roasts by username
 * Must include a valid username
 *
 * username String Username of the owner of a list of roasts
 * returns RoastArray
 **/
// TODO: Check this operation!
exports.getUserRoasts = async function(username) {
  return new Promise((resolve, reject) => {
    query('SELECT user_id FROM users WHERE username = $1;', [username])
      .then((response) => {
        if (!response.rows[0]) return reject('Invalid User');
        return query('SELECT * FROM roasts WHERE user_id = $1;', [response.rows[0].userId])
      }).then((roastQueryResponse) => {
        resolve(roastQueryResponse.rows);
      }).catch((e) => {
        reject(e);
      });
  })
}


/**
 * Delete roast by id
 * Can only be performed by a logged in user who owns the identified roast
 *
 * roastId Integer An integer that matches an id of a roast
 * returns Roast
 **/
// TODO: Check this operation!
exports.roastsRoastIdDELETE = function(roastId) {
  return new Promise((resolve, reject) => {
    query('DELETE FROM roasts WHERE roast_id = $1;', [roastId])
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
// TODO: Check this operation!
exports.roastsRoastIdGET = function(roastId) {
  return new Promise(function(resolve, reject) {
    query('SELECT * FROM roasts WHERE roast_id = $1', [roastId])
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
exports.roastsRoastIdPUT = function(body, roastId) {
  return new Promise(function(resolve, reject) {
    const { text, values } = updateStatement(body, 'roasts', roastId);
    query(text, values)
      .then((response) => {
        if (response.rowCount === 0) {
          return reject('No roast found with that ID.');
        }
        resolve(response.rows[0]);
      })
      .catch(e => reject(e));
  });
};


