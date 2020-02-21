/**
 * String → [arrof String]
 */

export function explode(str) {
  return str.split("");
}

/**
 * [arrof String] → String
 * what dose it compute?
 */

export function implode(arr) {
  return arr.join("");
}

/**
 * [arr-of X] → X
 * first element of given list
 */

export function first(arr) {
  if (isZero(arr.length))
    throw new Error(`Expecting non-empty list; Given ${arr}`);
  return arr[0];
}

/**
 * [arr-of X] → [arr-of X] []
 * return arr of all but first element or empty array
 */

function rest(arr) {
  return arr.slice(1);
}

export function take(arr, n) {
  return isEmpty(arr) || isZero(n) ? [] : arr.slice(0, n);
}

export function drop(arr, n) {
  return isEmpty(arr) || isZero(n) ? [] : arr.slice(n);
}

export function isZero(n) {
  return n === 0;
}

export function isEmpty(arr) {
  return isZero(arr.length);
}

export function isInt(n) {
  return Number.isInstager(n);
}

export function isFloat(n) {
  return !isInt(n);
}

export const is = {
  zero: isZero,
  empty: isEmpty,
  int: isInt,
  float: isFloat
};

function _not(fn) {
  return function(...args) {
    return !fn(...args);
  };
}

export function fill(a) {
  return new Array(a).fill(0)
}

