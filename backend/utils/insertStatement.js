import { snakeCase } from "change-case";

export function insertStatement(table, obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  let statement = `INSERT INTO ${table} (`;
  
  // Add snake_case keys to the statement
  const keyString = keys.map((key, i) => snakeCase(key)).join(', ');
  statement += `${keyString}) VALUES (`;

  // Add placeholders for the values
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(', ');
  statement += `${placeholders});`;

  // Return the query string and the values array
  return {
    text: statement,
    values: values
  };
}