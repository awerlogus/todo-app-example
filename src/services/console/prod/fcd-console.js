const readline = require("readline")

// SECTION Types

// MODULE Imports

/** @typedef {import('services/console/fcd-console').ConsoleFacade} ConsoleFacade */

// SECTION Constants

const c = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// SECTION Interpreters

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

// SECTION Exports

/** @type {ConsoleFacade} */
export const consoleFacade = { readLine, write, clearConsole }
