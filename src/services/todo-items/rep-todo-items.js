// SECTION Types

// MODULE Imports

/** @typedef {import('models/item').Item} Item */

// MODULE Algebras

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

// SECTION Exports

export default {}
