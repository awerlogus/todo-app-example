// SECTION Types

// MODULE Imports

/** @typedef {import('models/item').Item} Item */

/** @typedef {import('services/program/alg-program').Program} Program */

// SECTION Commands

/** @type {(P: Program) => (item: Item) => void} */
export const writeTodoItem = P => item => P.write(`${item.id}) ${item.text}\n`)

/** @type {(P: Program) => () => void} */
export const writeTodoItems = P => () => {
  const items = P.getTodoItems()

  if (items.length === 0) {
    P.write('TODO list is empty\n')
  } else {
    P.write('TODO items list:\n')

    items.forEach(writeTodoItem(P))
  }
}
