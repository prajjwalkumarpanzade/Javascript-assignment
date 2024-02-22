function deepClone(obj) {
    
  if (typeof obj === 'object' && obj !== null) {
      const clone = Array.isArray(obj) ? [] : {};
      
      for (const key in obj) {
          clone[key] = deepClone(obj[key]);
      }
      return clone;
  } else {
      return obj;
  }
}


const original = {
  a: 1,
  b: [2, { c: 3 }],
  d: { e: 'hello' }
};

const cloned = deepClone(original);

console.log(cloned);
console.log(original === cloned);
