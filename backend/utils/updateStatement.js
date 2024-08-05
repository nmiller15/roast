
const { snakeCase } = require('change-case-commonjs');

function updateStatement(obj, table, id) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  let statement = `UPDATE ${table} SET `;

  keys.forEach((key, index) => {
    statement += `${snakeCase(key)} = $${index + 1}, `;
  });

  // Remove the last comma and space
  statement = statement.slice(0, -2);

  // Determine the correct ID column based on the table
  const idColumn = table === 'users' ? 'username' : table === 'roasts' ? 'roasts.id' : '';

  // Finalize the statement with the WHERE clause
  statement += ` WHERE ${idColumn} = $${keys.length + 1} RETURNING *;`;

  return {
    text: statement,
    values: [...values, id]
  };
}

module.exports = updateStatement