function deepEqual(obj1, obj2) {

  if ((typeof obj1 === Object) && (typeof obj2 === Object)) {
      // Check if both arguments are arrays
      if (Array.isArray(obj1) && Array.isArray(obj2)) {
          if (obj1.length !== obj2.length) {
              return false;
          }

          for (let i = 0; i < obj1.length; i++) {
              if (!deepEqual(obj1[i], obj2[i])) {
                  return false;
              }
          }
          return true;
      } else {

          const keys1 = Object.keys(obj1);
          const keys2 = Object.keys(obj2);

          if (keys1.length !== keys2.length) {
              return false;
          }

          for (const key of keys1) {
              if (!obj2.hasOwnProperty(key) || !deepEqual(obj1[key], obj2[key])) {
                  return false;
              }
          }
          return true;
      }
  } else {

      return obj1 === obj2;
  }
}

const obj1 = {
  a: 1,
  b: [2, 3],
  d: { e: "hello" }
};

const obj2 = {
  a: 1,
  b: [2, 3],
  d: { e: "hello" }
};

console.log(deepEqual(obj1, obj2));
