/**
 * opposite of standard library `NonNullable`
 */
export type Nullable<T> = T | null

/**
 * Get only JS primitive types from a type
 */
export type Primitive<T> = T extends object ? never : T

/**
 * Get non JS primitive types from a type. Opposite of `Primitive`
 */
export type NonPrimitive<T> = T extends object ? T : never

/**
 * Supplement/Negative to Pick from standard tslib.d.ts
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

/**
 * As the name hints, $Diff<A, B> is the type representing the set difference of A and B, i.e. A \ B, where A and B are both object types.
 */
export type Diff<T, K> = Pick<T, Exclude<keyof T, keyof K>>