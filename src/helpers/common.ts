/**
 * User defined type guard, which guarantees 'object is T', not undefined, not null
 * @see https://2ality.com/2020/06/type-guards-assertion-functions-typescript.html#user-defined-type-guards
 * @param {T | undefined | null} variable
 * @return {object is T}
 */
export const isDefined = <T>(variable: T | undefined | null): variable is NonNullable<T> => variable !== undefined && variable !== null;

/**
 * Type guard, which guarantees object is defined but empty
 * @param {"" | T | undefined | null} value
 * @return {value is "" | undefined | null}
 */
export const isEmpty = <T>(value: T | undefined | null | ''): value is undefined | null | '' => !isDefined(value) || value === '';
