const { camelCase } = require('change-case-commonjs');

function objectKeysToCamel(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  let camel = {}

  keys.forEach((key, i) => {
    const camelKey = camelCase(key);
    camel[camelKey] = values[i]
  })

  return camel;
}

module.exports = objectKeysToCamel;