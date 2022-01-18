
export const toSnakeCase = (options: Object):any => {
  if (!options) return {}

  const formatted = {} 
  
  const { snakeCase } = require("snake-case");

  for (let key in options) {
    const value = options[key]
    const newKey = snakeCase(key)

    formatted[newKey] = value
  }
 
  return formatted
}