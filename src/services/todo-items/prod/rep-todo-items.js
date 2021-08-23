// SECTION Types

// MODULE Imports

/** @typedef {import('models/item').Item} Item */

/** @typedef {import('services/todo-items/rep-todo-items').TodoItemsRepository} TodoItemsRepository */

// SECTION State

/** @type {Map<number, Item>} */
const state = new Map()

// SECTION Exports

/** @type {TodoItemsRepository} */
export const todoItemsRepository = {
  getTodoItems: () => Array.from(state.values()),
  removeTodoItem: state.delete.bind(state),
  hasTodoItem: state.has.bind(state),
  addTodoItem: state.set.bind(state),
}
