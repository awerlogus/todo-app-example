// SECTION Types

// MODULE Imports

/** @typedef {import('models/item').Item} Item */

// MODULE Prod algebras

/** @typedef {{ hasTodoItem(id: number): boolean }} HasTodoItem */

/** @typedef {{ removeTodoItem(id: number): void }} RemoveTodoItem */

/** @typedef {{ getTodoItems(): ReadonlyArray<Item> }} GetTodoItems */

/** @typedef {{ addTodoItem(id: number, item: Item): void }} AddTodoItem */

/**
 * @typedef {(
 *  & HasTodoItem
 *  & AddTodoItem
 *  & GetTodoItems
 *  & RemoveTodoItem
 * )} TodoItemsRepository
 */

// MODULE Test algebras

/** @typedef {{ _getTodoItems(): ReadonlyMap<number, Item> }} _GetTodoItems */

/**
 * @typedef {(
 *  & _GetTodoItems
 *  & TodoItemsRepository
 * )} _TodoItemsRepository
 */

// SECTION Exports

/** @type {(init: ReadonlyMap<number, Item>) => _TodoItemsRepository} */
export const createTodoItemsRepository = init => {
  const state = new Map(init)

  return {
    getTodoItems: () => Array.from(state.values()),
    addTodoItem: (id, item) => state.set(id, item),
    removeTodoItem: id => state.delete(id),
    hasTodoItem: id => state.has(id),
    _getTodoItems: () => state,
  }
}
