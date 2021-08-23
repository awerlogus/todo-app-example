import { createTestConsoleFacade } from 'services/console/test/fcd-console'

// SECTION Types

// MODULE Algebras

/** @typedef {{ consoleFacade: ReadonlyArray<string> }} ConsoleFacadeInit */

/**
 * @typedef {(
 *  & ConsoleFacadeInit
 * )} ConsoleAlgebraInit
 */

/**
 * @typedef {(
 *  & import('services/console/test/fcd-console')._ConsoleFacade
 * )} _ConsoleAlgebra
 */

// SECTION Exports

/** @type {(init: ConsoleAlgebraInit) => _ConsoleAlgebra} */
export const createTestConsoleAlgebra = init => ({
  ...createTestConsoleFacade(init.consoleFacade)
})
