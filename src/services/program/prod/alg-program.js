import { createTodoItemsAlgebra } from 'services/todo-items/alg-todo-items'
import { createConsoleAlgebra } from 'services/console/prod/alg-console'

// SECTION Types

// MODULE Imports

/** @typedef {import('services/program/alg-program').Program} Program */

// SECTION Exports

/** @type {Program} */
export const program = {
  ...createTodoItemsAlgebra(),
  ...createConsoleAlgebra(),
}
