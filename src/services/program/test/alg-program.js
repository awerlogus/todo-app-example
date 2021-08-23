import { createTestTodoItemsAlgebra } from 'services/todo-items/test/alg-todo-items'
import { createTestConsoleAlgebra } from 'services/console/test/alg-console'

// SECTION Types

// MODULE Algebras

/**
 * @typedef {(
 *  & import('services/console/test/alg-console').ConsoleAlgebraInit
 *  & import('services/todo-items/test/alg-todo-items').TodoItemsAlgebraInit
 * )} ProgramInit
 */

/**
 * @typedef {(
 *  & import('services/console/test/alg-console')._ConsoleAlgebra
 *  & import('services/todo-items/test/alg-todo-items')._TodoItemsAlgebra
 * )} _Program
 */

// SECTION Constants

/** @type {ProgramInit} */
const defaultInit = {
  consoleFacade: [],
  todoIdsRepository: 0,
  todoItemsRepository: new Map(),
}

// SECTION Exports

/** @type {(init: Partial<ProgramInit>) => _Program} */
export const createTestProgram = init => {
  /** @type {ProgramInit} */
  const fullInit = { ...defaultInit, ...init }

  return {
    ...createTestConsoleAlgebra(fullInit),
    ...createTestTodoItemsAlgebra(fullInit),
  }
}
