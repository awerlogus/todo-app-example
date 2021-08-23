import { todoItemsAlgebra } from 'services/todo-items/prod/alg-todo-items'
import { consoleAlgebra } from 'services/console/prod/alg-console'

// SECTION Types

// MODULE Imports

/** @typedef {import('services/program/alg-program').Program} Program */

// SECTION Exports

/** @type {Program} */
export const program = {
  ...todoItemsAlgebra,
  ...consoleAlgebra,
}
