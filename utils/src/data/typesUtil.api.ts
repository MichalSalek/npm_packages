// Shorthand for undefined type check.
// TypeScript transparent with guard statements. If you need, use then conventional notation (typeof) or optional?.chaining.
export const isNotDefined = (thing: unknown | undefined): boolean => typeof thing === 'undefined'


// Equivalent to KeyOf
export type ValueOf<T> = T[keyof T]

export type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> & Pick<T, TRequired>

