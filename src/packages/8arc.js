// SECTION Utils

/** @type {<P extends Record<string, any>, T>(defaults: P, callback: (init: P) => T) => (init?: Partial<P>) => T} */
export const createAlgebra = (defaults, factory) => init => factory({ ...defaults, ...init })
