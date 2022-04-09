import { askedQuestion, gotAnswer, loggedString } from 'services/console/test/fcd-console'
import { createTestConsoleAlgebra } from 'services/console/test/alg-console'
import { notify } from 'services/console/srv-console'

// SECTION Tests

describe('notify function', () => {
  it('must write message to console and ask user to press enter', async () => {
    const P = createTestConsoleAlgebra({ console: ['\n'] })

    await notify(P)('message')

    expect(P._getLogs()).toMatchObject([
      loggedString('\nmessage\n'),
      askedQuestion('Press enter to continue'),
      gotAnswer('\n'),
    ])
  })
})
