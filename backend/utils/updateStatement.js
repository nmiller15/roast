/*
UPDATE roasts
SET key = value, key1 = value1 ...
WHERE roast_id = 3
*/
import { snakeCase } from "change-case";

export default function updateStatement(obj, table, id) {
  let keys = Object.keys(obj)
  let values = Object.values(obj);
  let statement = 'UPDATE ' + table + ' SET '

  keys.forEach((key, index) => {
    statement = statement + snakeCase(key) + ' = ' + values[index] + ' '; 
  })

  statement = statement + 'WHERE ' + table == 'users' ? 'user_id ' : table == 'roasts' ? 'roast_id ' : '' + ' = ' + id + ' RETURNING *;'
  return statement;
}