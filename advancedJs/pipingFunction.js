/**
 * Given an object which can have a function as a value at a nested level,
 * create a function that will accept arguments as input and
 * pass it through all the functions in the input object and return the computed value.
 */

const obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
};

function fn(obj) {
  function findAndApplyToNestedFunction(obj, ...args) {
    const result = {};
    for (let key in obj) {
      if (obj[key] == null) continue;
      if (typeof obj[key] === "function") {
        result[key] = obj[key](...args);
      } else if (typeof obj[key] === "object") {
        result[key] = findAndApplyToNestedFunction(obj[key], ...args);
      } else {
        result[key] = obj[key];
      }
    }
    return result;
  }

  return function (...args) {
    return findAndApplyToNestedFunction(obj, ...args);
  };
}

const res = fn(obj)(61, 1, 5);

console.log(res);
