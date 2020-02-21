/**
 * String → [arrof String]
 */

function explode(str) {
  return str.split("");
}

/**
 * [arrof String] → String
 * what dose it compute?
 */

function implode(arr) {
  return arr.join("");
}

/**
 * [arr-of X] → X
 * first element of given list
 */

function first(arr) {
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

function take(arr, n) {
  return isEmpty(arr) || isZero(n) ? [] : arr.slice(0, n);
}

function drop(arr, n) {
  return isEmpty(arr) || isZero(n) ? [] : arr.slice(n);
}

function isZero(n) {
  return n === 0;
}

function isEmpty(arr) {
  return isZero(arr.length);
}

function isInt(n) {
  return Number.isInteger(n);
}

function isFloat(n) {
  return !isInt(n);
}

function isEven(n) {
  return n % 2 === 0
}

const is = {
  zero: isZero,
  empty: isEmpty,
  int: isInt,
  float: isFloat,
  odd: n => !isEven(n),
  even: isEven
};

function add1(n) { return n + 1 }

function _not(fn) {
  return function(...args) {
    return !fn(...args);
  };
}

function fill(a, f = 0) {
  return new Array(a).fill(f);
}

module.exports = {
  implode,
  explode,
  first,
  rest,
  take,
  drop,
  is,
  fill,
  add1
};
