import { createTestConsoleFacade } from 'services/console/test/fcd-console'
import { createAlgebra } from 'packages/8arc'

// SECTION Types

// MODULE Algebras

/** @typedef {{ console: ReadonlyArray<string> }} ConsoleFacadeInit */

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

/** @type {() => ConsoleAlgebraInit} */
const getDefaults = () => ({
  console: []
})

/** @type {(init?: Partial<ConsoleAlgebraInit>) => _ConsoleAlgebra} */
export const createTestConsoleAlgebra = createAlgebra(getDefaults, init => ({
  ...createTestConsoleFacade(init.console)
}))
