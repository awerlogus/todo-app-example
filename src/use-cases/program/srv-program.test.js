import { clearedConsole, loggedString, askedQuestion, gotAnswer } from 'services/console/test/fcd-console'
import { createTestProgram } from 'services/program/test/alg-program'
import { runProgram } from 'use-cases/program/srv-program'

// SECTION Tests


describe('runProgram function', () => {
  it('must add new item on + command executed', async () => {
    const P = createTestProgram({
      consoleFacade: ['+ item1\n', '.\n'],
    })

    await runProgram(P)()

    expect(P._getLogs()).toMatchObject([
      clearedConsole,
      loggedString('TODO list is empty\n'),
      askedQuestion('Write the next command: '),
      gotAnswer('+ item1\n'),
      clearedConsole,
      loggedString('TODO items list:\n'),
      loggedString('0) item1\n'),
      askedQuestion('Write the next command: '),
      gotAnswer('.\n'),
    ])

    expect(P._getTodoItems()).toMatchObject(new Map([
      [0, { id: 0, text: 'item1' }]
    ]))

    expect(P._getNextTodoId()).toBe(1)
  })

  it('must show error on + command executed with empty todo text', async () => {
    const P = createTestProgram({
      consoleFacade: ['+ \n', '\n', '.\n'],
    })

    await runProgram(P)()

    expect(P._getLogs()).toMatchObject([
      clearedConsole,
      loggedString('TODO list is empty\n'),
      askedQuestion('Write the next command: '),
      gotAnswer('+ \n'),
      loggedString('\nCan not add an empty TODO item\n'),
      askedQuestion('Press enter to continue'),
      gotAnswer('\n'),
      clearedConsole,
      loggedString('TODO list is empty\n'),
      askedQuestion('Write the next command: '),
      gotAnswer('.\n'),
    ])

    expect(P._getTodoItems()).toMatchObject(new Map())

    expect(P._getNextTodoId()).toBe(0)
  })

  it('must delete item on - command executed', async () => {
    const P = createTestProgram({
      consoleFacade: ['- 0\n', '.\n'],
      todoItemsRepository: new Map([[0, { id: 0, text: 'item1' }]]),
      todoIdsRepository: 1,
    })

    await runProgram(P)()

    expect(P._getLogs()).toMatchObject([
      clearedConsole,
      loggedString('TODO items list:\n'),
      loggedString('0) item1\n'),
      askedQuestion('Write the next command: '),
      gotAnswer('- 0\n'),
      clearedConsole,
      loggedString('TODO list is empty\n'),
      askedQuestion('Write the next command: '),
      gotAnswer('.\n'),
    ])

    expect(P._getTodoItems()).toMatchObject(new Map())

    expect(P._getNextTodoId()).toBe(1)
  })

  it('must show error on - command executed with invalid id', async () => {
    const P = createTestProgram({
      consoleFacade: ['- foo\n', '\n', '.\n'],
      todoItemsRepository: new Map([[0, { id: 0, text: 'item1' }]]),
      todoIdsRepository: 1,
    })

    await runProgram(P)()

    expect(P._getLogs()).toMatchObject([
      clearedConsole,
      loggedString('TODO items list:\n'),
      loggedString('0) item1\n'),
      askedQuestion('Write the next command: '),
      gotAnswer('- foo\n'),
      loggedString('\nTODO item id must be a number\n'),
      askedQuestion('Press enter to continue'),
      gotAnswer('\n'),
      clearedConsole,
      loggedString('TODO items list:\n'),
      loggedString('0) item1\n'),
      askedQuestion('Write the next command: '),
      gotAnswer('.\n'),
    ])

    expect(P._getTodoItems()).toMatchObject(new Map([
      [0, { id: 0, text: 'item1' }]
    ]))

    expect(P._getNextTodoId()).toBe(1)
  })

  it('must show error on - command executed with not existing id', async () => {
    const P = createTestProgram({
      consoleFacade: ['- 1\n', '\n', '.\n'],
      todoItemsRepository: new Map([[0, { id: 0, text: 'item1' }]]),
      todoIdsRepository: 1,
    })

    await runProgram(P)()

    expect(P._getLogs()).toMatchObject([
      clearedConsole,
      loggedString('TODO items list:\n'),
      loggedString('0) item1\n'),
      askedQuestion('Write the next command: '),
      gotAnswer('- 1\n'),
      loggedString('\nTODO item with id 1 not found\n'),
      askedQuestion('Press enter to continue'),
      gotAnswer('\n'),
      clearedConsole,
      loggedString('TODO items list:\n'),
      loggedString('0) item1\n'),
      askedQuestion('Write the next command: '),
      gotAnswer('.\n'),
    ])

    expect(P._getTodoItems()).toMatchObject(new Map([
      [0, { id: 0, text: 'item1' }]
    ]))

    expect(P._getNextTodoId()).toBe(1)
  })

  it('must show error on unknown command executed', async () => {
    const P = createTestProgram({
      consoleFacade: ['foo\n', '\n', '.\n'],
    })

    await runProgram(P)()

    expect(P._getLogs()).toMatchObject([
      clearedConsole,
      loggedString('TODO list is empty\n'),
      askedQuestion('Write the next command: '),
      gotAnswer('foo\n'),
      loggedString('\nWrong command\n'),
      askedQuestion('Press enter to continue'),
      gotAnswer('\n'),
      clearedConsole,
      loggedString('TODO list is empty\n'),
      askedQuestion('Write the next command: '),
      gotAnswer('.\n'),
    ])

    expect(P._getTodoItems()).toMatchObject(new Map())

    expect(P._getNextTodoId()).toBe(0)
  })
})
