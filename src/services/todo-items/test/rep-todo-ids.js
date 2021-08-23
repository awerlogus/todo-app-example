// SECTION Types

// MODULE Imports

/** @typedef {import('services/todo-items/rep-todo-ids').TodoIdsRepository} TodoIdsRepository */

// MODULE Algebras

/** @typedef {{ _getNextTodoId(): number }} _GetNextTodoId */

/**
 * @typedef {(
 *  & _GetNextTodoId
 *  & TodoIdsRepository
 * )} _TodoIdsRepository
 */

// SECTION Exports

/** @type {(start: number) => _TodoIdsRepository} */
export const createTestTodoIdsRepository = start => {
  let next = start

  return {
    incrementNextTodoId: () => { next = next + 1 },
    _getNextTodoId: () => next,
    getNextTodoId: () => next,
  }
}
