// SECTION Types

// MODULE Imports

/** @typedef {import('models/item').Item} Item */

/** @typedef {import('services/todo-items/rep-todo-items').TodoItemsRepository} TodoItemsRepository */

// MODULE Algebras

/** @typedef {{ _getTodoItems(): ReadonlyMap<number, Item> }} _GetTodoItems */

/**
 * @typedef {(
 *  & _GetTodoItems
 *  & TodoItemsRepository
 * )} _TodoItemsRepository
 */

// SECTION Exports

/** @type {(initItems: ReadonlyMap<number, Item>) => _TodoItemsRepository} */
export const createTestTodoItemsRepository = initItems => {
  const items = new Map(initItems)

  return {
    _getTodoItems: () => items,
    hasTodoItem: items.has.bind(items),
    addTodoItem: items.set.bind(items),
    removeTodoItem: items.delete.bind(items),
    getTodoItems: () => Array.from(items.values()),
  }
}
