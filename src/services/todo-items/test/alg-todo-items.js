import { createTestTodoItemsRepository } from 'services/todo-items/test/rep-todo-items'
import { createTestTodoIdsRepository } from 'services/todo-items/test/rep-todo-ids'

// SECTION Types

// MODULE Imports

/** @typedef {import('models/item').Item} Item */

// MODULE Algebras

/** @typedef {{ todoIdsRepository: number }} TodoIdsRepositoryInit */

/** @typedef {{ todoItemsRepository: Map<number, Item> }} TodoItemsRepositoryInit */

/**
 * @typedef {(
 *  & TodoIdsRepositoryInit
 *  & TodoItemsRepositoryInit
 * )} TodoItemsAlgebraInit
 */

/**
 * @typedef {(
 *  & import('services/todo-items/test/rep-todo-ids')._TodoIdsRepository
 *  & import('services/todo-items/test/rep-todo-items')._TodoItemsRepository
 * )} _TodoItemsAlgebra
 */

// SECTION Exports

/** @type {(init: TodoItemsAlgebraInit) => _TodoItemsAlgebra} */
export const createTestTodoItemsAlgebra = init => ({
  ...createTestTodoItemsRepository(init.todoItemsRepository),
  ...createTestTodoIdsRepository(init.todoIdsRepository),
})
