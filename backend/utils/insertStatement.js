import { snakeCase } from "change-case";

export function insertStatement(table, obj) {
  const keys = Object.keys(obj)
  const values = Object.values(obj);

  let statement = 'INSERT INTO ' + table + ' ('
  keys.forEach((key, i) => {
    const snakeKey = snakeCase(key);
    statement = i == keys.length - 1 ? statement + key + ') VALUES (' : statement + key + ', '
  })
  values.forEach((value, i) => {
    statement = i == values.length - 1 ? statement + value +');' : statement + value + ', '
  })

  // console.log(statement);
  return statement;
}