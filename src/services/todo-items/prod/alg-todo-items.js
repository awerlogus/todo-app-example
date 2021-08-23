import { todoItemsRepository } from 'services/todo-items/prod/rep-todo-items'
import { todoIdsRepository } from 'services/todo-items/prod/rep-todo-ids'

// SECTION Types

// MODULE Imports

/** @typedef {import('services/todo-items/alg-todo-items').TodoItemsAlgebra} TodoItemsAlgebra */

// SECTION Exports

/** @type {TodoItemsAlgebra} */
export const todoItemsAlgebra = {
  ...todoItemsRepository,
  ...todoIdsRepository,
}
