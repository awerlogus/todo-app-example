import { createTestTodoItemsAlgebra } from 'services/todo-items/test/alg-todo-items'
import { addTodoItem } from 'services/todo-items/srv-todo-items'

// SECTION Tests

describe('addTodoItem function', () => {
  it('must add todo item and increment next todo id', () => {
    const P = createTestTodoItemsAlgebra({
      todoItemsRepository: new Map(),
      todoIdsRepository: 1,
    })

    addTodoItem(P)('todo text')

    expect(P._getNextTodoId()).toBe(2)

    expect(P.getTodoItems()).toMatchObject(new Map([
      [1, { id: 1, text: 'todo text' }]
    ]))
  })
})
