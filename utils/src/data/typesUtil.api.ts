// Shorthand for undefined type check.
// TypeScript transparent with guard statements. If you need, use then conventional notation (typeof) or optional?.chaining.
export const isUndefinedType = (somethingToCheck: unknown | undefined): boolean => typeof somethingToCheck === 'undefined'


// Equivalent to KeyOf
export type ValueOf<T> = T[keyof T]
