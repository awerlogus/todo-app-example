import { startTodoId } from 'models/mdl-todo-ids'

// SECTION Types

// MODULE Imports

/** @typedef {import('services/todo-items/rep-todo-ids').TodoIdsRepository} TodoIdsRepository */

// SECTION State

/** @type {number} */
let state = startTodoId

// SECTION Interpreters

/** @type {TodoIdsRepository['getNextTodoId']} */
function getNextTodoId () { return state }

/** @type {TodoIdsRepository['incrementNextTodoId']} */
function incrementNextTodoId () { state = state + 1 }

// SECTION Exports

/** @type {TodoIdsRepository} */
export const todoIdsRepository = {
  incrementNextTodoId,
  getNextTodoId,
}
