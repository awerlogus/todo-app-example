import { consoleFacade } from 'services/console/prod/fcd-console'

// SECTION Types

// MODULE Imports

/** @typedef {import('services/console/alg-console').ConsoleAlgebra} ConsoleAlgebra */

// SECTION Exports

/** @type {ConsoleAlgebra} */
export const consoleAlgebra = {
  ...consoleFacade
}
