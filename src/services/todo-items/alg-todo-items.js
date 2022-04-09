import { createNextTodoIdRepository } from 'services/todo-items/rep-next-todo-id'
import { createTodoItemsRepository } from 'services/todo-items/rep-todo-items'
import { startTodoId } from 'models/mdl-todo-ids'
import { createAlgebra } from 'packages/8arc'

// SECTION Types

// MODULE Imports

/** @typedef {import('models/item').Item} Item */

// MODULE Init algebras

/** @typedef {{ nextTodoId: number }} NextTodoIdInit */

/** @typedef {{ todoItems: ReadonlyMap<number, Item> }} TodoItemsInit */

/**
 * @typedef {(
 *  & TodoItemsInit
 *  & NextTodoIdInit
 * )} TodoItemsAlgebraInit
 */

// MODULE Algebras

/**
 * @typedef {(
 *  & import('services/todo-items/rep-todo-items').TodoItemsRepository
 *  & import('services/todo-items/rep-next-todo-id').NextTodoIdRepository
 * )} TodoItemsAlgebra
 */

/**
 * @typedef {(
 *  & import('services/todo-items/rep-todo-items')._TodoItemsRepository
 *  & import('services/todo-items/rep-next-todo-id')._NextTodoIdRepository
 * )} _TodoItemsAlgebra
 */

// SECTION Exports

/** @type {() => TodoItemsAlgebraInit} */
const getDefaults = () => ({
  nextTodoId: startTodoId,
  todoItems: new Map(),
})

/** @type {(init?: Partial<TodoItemsAlgebraInit>) => _TodoItemsAlgebra} */
export const createTodoItemsAlgebra = createAlgebra(getDefaults, init => ({
  ...createNextTodoIdRepository(init.nextTodoId),
  ...createTodoItemsRepository(init.todoItems),
}))
