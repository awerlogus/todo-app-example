import assert from 'assert'

// SECTION Types

// MODULE Imports

/** @typedef {import('services/console/fcd-console').ConsoleFacade} ConsoleFacade */

// MODULE Declarations

/**
 * @typedef {(
 *  | { type: 'clear' }
 *  | { type: 'string', msg: string }
 *  | { type: 'answer', data: string }
 *  | { type: 'question', msg: string }
 * )} _LoggedMessage
 */

// MODULE Algebras

/** @typedef {{ _getLogs(): ReadonlyArray<_LoggedMessage> }} _GetLogs */

/**
 * @typedef {(
 *  & _GetLogs
 *  & ConsoleFacade
 * )} _ConsoleFacade
 */

// SECTION Constants

/** @type {_LoggedMessage} */
export const clearedConsole = { type: 'clear' }

/** @type {(msg: string) => _LoggedMessage} */
export function loggedString (msg) { return { type: 'string', msg } }

/** @type {(msg: string) => _LoggedMessage} */
export function askedQuestion (msg) { return { type: 'question', msg } }

/** @type {(data: string) => _LoggedMessage} */
export function gotAnswer (data) { return { type: 'answer', data } }

// SECTION Exports

/** @type {(inputs: ReadonlyArray<string>) => _ConsoleFacade} */
export function createTestConsoleFacade (inputs) {
  /** @type {Array<string>} */
  const inputList = Array.from(inputs)

  /** @type {Array<_LoggedMessage>} */
  const outputList = []

  /** @type {_ConsoleFacade['_getLogs']} */
  function _getLogs () { return outputList }

  /** @type {_ConsoleFacade['readLine']} */
  function readLine (question) {
    outputList.push(askedQuestion(question))

    const next = inputList.shift()

    assert(next !== undefined)

    outputList.push(gotAnswer(next))

    return Promise.resolve(next)
  }

  /** @type {_ConsoleFacade['write']} */
  function write (message) {
    outputList.push(loggedString(message))
  }

  /** @type {_ConsoleFacade['clearConsole']} */
  function clearConsole () {
    outputList.push(clearedConsole)
  }

  return { _getLogs, readLine, write, clearConsole }
}
