import { createTestConsoleAlgebra } from 'services/console/test/alg-console'
import { createTodoItemsAlgebra } from 'services/todo-items/alg-todo-items'

// SECTION Types

// MODULE Algebras

/**
 * @typedef {(
 *  & import('services/console/test/alg-console').ConsoleAlgebraInit
 *  & import('services/todo-items/alg-todo-items').TodoItemsAlgebraInit
 * )} ProgramInit
 */

/**
 * @typedef {(
 *  & import('services/console/test/alg-console')._ConsoleAlgebra
 *  & import('services/todo-items/alg-todo-items')._TodoItemsAlgebra
 * )} _Program
 */

// SECTION Exports

/** @type {(init: Partial<ProgramInit>) => _Program} */
export const createTestProgram = init => ({
  ...createTestConsoleAlgebra(init),
  ...createTodoItemsAlgebra(init),
})
