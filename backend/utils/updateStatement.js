/*
UPDATE roasts
SET key = value, key1 = value1 ...
WHERE roast_id = 3
*/
import { snakeCase } from "change-case";

export default function updateStatement(obj, table, id) {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let statement = `UPDATE ${table} SET `;

  keys.forEach((key, index) => {
    statement += `${snakeCase(key)} = $${index + 1}, `;
  });

  // Remove the last comma and space
  statement = statement.slice(0, -2);

  // Determine the correct ID column based on the table
  const idColumn = table === 'users' ? 'user_id' : table === 'roasts' ? 'roast_id' : '';

  // Finalize the statement with the WHERE clause
  statement += ` WHERE ${idColumn} = $${keys.length + 1} RETURNING *;`;

  return {
    text: statement,
    values: [...values, id]
  };
}