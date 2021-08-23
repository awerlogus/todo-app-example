import { addTodoItem } from 'services/todo-items/srv-todo-items'
import { writeTodoItems } from 'use-cases/console/srv-console'
import { notify } from 'services/console/srv-console'
import { isExit } from 'models/mdl-program'

// SECTION Types

// MODULE Imports

/** @typedef {import('services/program/alg-program').Program} Program */

// SECTION Commands

/** @type {(P: Program) => (cmd: string) => Promise<boolean>} */
const tryHandleAdd = P => async cmd => {
  if (!cmd.startsWith('+')) { return false }

  const text = cmd.substr(1).trim()

  if (text.length === 0) {
    await notify(P)('Can not add an empty TODO item')

    return true
  }

  addTodoItem(P)(text)

  return true
}

/** @type {(P: Program) => (cmd: string) => Promise<boolean>} */
const tryHandleRemove = P => async cmd => {
  if (!cmd.startsWith('-')) { return false }

  const id = Number(cmd.substring(1).trim())

  if (Number.isNaN(id)) {
    await notify(P)('TODO item id must be a number')

    return true
  }

  if (!P.hasTodoItem(id)) {
    await notify(P)(`TODO item with id ${id} not found`)

    return true
  }

  P.removeTodoItem(id)

  return true
}

/** @type {(P: Program) => () => Promise<void>} */
export const runProgram = P => async () => {
  while (true) {
    P.clearConsole()

    writeTodoItems(P)()

    const cmd = (await P.readLine('Write the next command: ')).trim()

    if (isExit(cmd)) { return }
    if (await tryHandleAdd(P)(cmd)) { continue }
    if (await tryHandleRemove(P)(cmd)) { continue }

    await notify(P)('Wrong command')
  }
}
