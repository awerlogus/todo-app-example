// SECTION Utils

/** @type {<P extends Record<string, any>, T>(getDefaults: () => P, callback: (init: P) => T) => (init?: Partial<P>) => T} */
export const createAlgebra = (getDefaults, factory) => init => factory({ ...getDefaults(), ...init })
