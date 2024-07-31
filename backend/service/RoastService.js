'use strict';
const query = require('../database/db');


/**
 * Create a new roast
 * Must include a valid roast object
 *
 * body Roast 
 * returns Roast
 **/
exports.addRoast = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notes" : "Doesn't taste as good as last time... I wonder if the weather is making the beans roast faster now that it's warmer",
  "heatLevel" : "Med",
  "origin" : "Ethiopian",
  "lowestTempF" : 325,
  "rating" : 3,
  "heatOffSeconds" : 235,
  "startTempF" : 400,
  "firstCrackSeconds" : 140,
  "tempRiseSeconds" : 180,
  "userId" : 198772,
  "dateRoasted" : "2000-01-23T04:56:07.000+00:00",
  "startingWeightG" : 228,
  "openedLidSeconds" : 210,
  "engingWeightG" : 191,
  "variety" : "Yirgacheffe",
  "dumpedSeconds" : 255,
  "name" : "Number One",
  "id" : 10,
  "isFavorite" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
  const userResponse = await query('SELECT user_id FROM users WHERE username = $1', [username]);
  if (!userResponse) throw new Error('Invalid User');
  const roasts = await query('SELECT * FROM roasts WHERE user_id = $1', [userResponse[0]]);
  return roasts; 
}


/**
 * Delete roast by id
 * Can only be performed by a logged in user who owns the identified roast
 *
 * roastId Integer An integer that matches an id of a roast
 * returns Roast
 **/
exports.roastsRoastIdDELETE = function(roastId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notes" : "Doesn't taste as good as last time... I wonder if the weather is making the beans roast faster now that it's warmer",
  "heatLevel" : "Med",
  "origin" : "Ethiopian",
  "lowestTempF" : 325,
  "rating" : 3,
  "heatOffSeconds" : 235,
  "startTempF" : 400,
  "firstCrackSeconds" : 140,
  "tempRiseSeconds" : 180,
  "userId" : 198772,
  "dateRoasted" : "2000-01-23T04:56:07.000+00:00",
  "startingWeightG" : 228,
  "openedLidSeconds" : 210,
  "engingWeightG" : 191,
  "variety" : "Yirgacheffe",
  "dumpedSeconds" : 255,
  "name" : "Number One",
  "id" : 10,
  "isFavorite" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
    var examples = {};
    examples['application/json'] = {
  "notes" : "Doesn't taste as good as last time... I wonder if the weather is making the beans roast faster now that it's warmer",
  "heatLevel" : "Med",
  "origin" : "Ethiopian",
  "lowestTempF" : 325,
  "rating" : 3,
  "heatOffSeconds" : 235,
  "startTempF" : 400,
  "firstCrackSeconds" : 140,
  "tempRiseSeconds" : 180,
  "userId" : 198772,
  "dateRoasted" : "2000-01-23T04:56:07.000+00:00",
  "startingWeightG" : 228,
  "openedLidSeconds" : 210,
  "engingWeightG" : 191,
  "variety" : "Yirgacheffe",
  "dumpedSeconds" : 255,
  "name" : "Number One",
  "id" : 10,
  "isFavorite" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
exports.roastsRoastIdPUT = function(body,roastId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notes" : "Doesn't taste as good as last time... I wonder if the weather is making the beans roast faster now that it's warmer",
  "heatLevel" : "Med",
  "origin" : "Ethiopian",
  "lowestTempF" : 325,
  "rating" : 3,
  "heatOffSeconds" : 235,
  "startTempF" : 400,
  "firstCrackSeconds" : 140,
  "tempRiseSeconds" : 180,
  "userId" : 198772,
  "dateRoasted" : "2000-01-23T04:56:07.000+00:00",
  "startingWeightG" : 228,
  "openedLidSeconds" : 210,
  "engingWeightG" : 191,
  "variety" : "Yirgacheffe",
  "dumpedSeconds" : 255,
  "name" : "Number One",
  "id" : 10,
  "isFavorite" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

