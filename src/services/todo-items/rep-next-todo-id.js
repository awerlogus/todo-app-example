// SECTION Types

// MODULE Prod algebras

/** @typedef {{ getNextTodoId(): number }} GetNextTodoId */

/** @typedef {{ incrementNextTodoId(): void }} IncrementNextTodoId */

/**
 * @typedef {(
 *  & GetNextTodoId
 *  & IncrementNextTodoId
 * )} NextTodoIdRepository
 */

// MODULE Test algebras

/** @typedef {{ _getNextTodoId(): number }} _GetNextTodoId */

/**
 * @typedef {(
 *  & _GetNextTodoId
 *  & NextTodoIdRepository
 * )} _NextTodoIdRepository
 */

// SECTION Exports

/** @type {(init: number) => _NextTodoIdRepository} */
export const createNextTodoIdRepository = init => {
  let state = init

  return {
    incrementNextTodoId: () => { state += 1 },
    _getNextTodoId: () => state,
    getNextTodoId: () => state,
  }
}
