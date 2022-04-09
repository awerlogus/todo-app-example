import * as readline from 'readline'

// SECTION Types

// MODULE Imports

/** @typedef {import('services/console/fcd-console').ConsoleFacade} ConsoleFacade */

// SECTION Exports

/** @type {() => ConsoleFacade} */
export const createConsoleFacade = () => {
  const c = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  /** @type {ConsoleFacade['write']} */
  function write (message) {
    c.write(message)
  }

  /** @type {ConsoleFacade['readLine']} */
  function readLine (question) {
    return new Promise(resolve => {
      c.question(question, resolve)
    })
  }

  /** @type {ConsoleFacade['clearConsole']} */
  function clearConsole () {
    console.clear()
  }

  return { readLine, write, clearConsole }
}
