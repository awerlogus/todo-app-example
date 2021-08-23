// SECTION Types

// MODULE Imports

/** @typedef {import('services/console/alg-console').ConsoleAlgebra} ConsoleAlgebra */

// SECTION Commands

/** @type {(P: ConsoleAlgebra) => (text: string) => Promise<void>} */
export const notify = P => async text => {
  P.write('\n' + text + '\n')

  await P.readLine('Press enter to continue')
}
