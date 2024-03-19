// //Create a memoised function that returns the cached value when the same arguments are passed.

function myMemoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    // console.log(key)
    if (cache[key]) {
      // console.log("inside cache store")
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const add = myMemoize((a, b) => {
  return a + b;
});

console.log(add(2, 3));
console.log(add(2, 3));

