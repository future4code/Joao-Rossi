export default class idGenerator {
    execute = function idGenerator() : Number {
      const id = Math.floor(Math.random() * 10 + 1) + Date.now()
      return id
    }
}