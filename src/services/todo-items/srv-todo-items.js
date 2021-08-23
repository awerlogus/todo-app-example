// SECTION Types

// MODULE Imports

/** @typedef {import('models/item').Item} Item */

/** @typedef {import('services/todo-items/alg-todo-items').TodoItemsAlgebra} TodoItemsAlgebra */

// SECTION Commands

/** @type {(P: TodoItemsAlgebra) => (text: string) => void} */
export const addTodoItem = P => text => {
  const id = P.getNextTodoId()

  /** @type {Item} */
  const item = { id, text }

  P.addTodoItem(id, item)

  P.incrementNextTodoId()
}
