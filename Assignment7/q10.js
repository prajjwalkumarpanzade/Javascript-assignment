function getNestedKey(obj, path) {
  const keys = typeof path === 'string' ? path.split('.') : path;

  let currentObj = obj;
  for (const key of keys) {
    try {
      currentObj = currentObj[key];
    } catch (err) {
      return null;
    }
  }

  return currentObj;
}

const obj = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

const result = getNestedKey(obj, "address.details.1");
console.log(result);

