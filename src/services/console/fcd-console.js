// SECTION Types

// MODULE Algebras

/** @typedef {{ clearConsole(): void }} ClearConsole */

/** @typedef {{ write(message: string): void }} Write */

/** @typedef {{ readLine(question: string): Promise<string> }} ReadLine */

/**
 * @typedef {(
 *  & Write
 *  & ReadLine
 *  & ClearConsole
 * )} ConsoleFacade
 */

// SECTION Exports

export default {}
