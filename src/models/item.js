// SECTION Types

// MODULE Declarations

/**
 * @typedef {{
 *   text: string
 *   id: number
 * }} Item
 */

// SECTION Library

/** @type {(item: Item) => Item['text']} */
export const getText = item => item.text

/** @type {(item: Item) => Item['id']} */
export const getId = item => item.id
