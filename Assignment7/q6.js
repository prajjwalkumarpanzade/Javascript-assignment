



function mergeById(arr1, arr2) {
  const map = {};

  // Store objects from arr1 in hashmap indexed by id
  for (const obj of arr1) { 
    map[obj.id] = obj;
  }

  // Merge objects from arr2 with same id 
  for (const obj of arr2) {
    if (map[obj.id]) {
      Object.assign(map[obj.id], obj);
    }
  }

  // Convert hashmap values to array
  return Object.values(map);
}


let userNames = [{
  "id": 1,
  "first_name": "Nicki",
  }, {
  "id": 2,
  "first_name": "Raychel",
  }, {
  "id": 3,
  "first_name": "Demetris",
  }, {
  "id": 4,
  "first_name": "Amata",
  }]
  let userEmails = [{
  "id": 2,
  "email": "rmcgrady1@cpanel.net",
  }, {
  "id": 1,
  "email": "ncrozier0@squarespace.com",
  }, {
  "id": 4,
  "email": "abraiden3@canalblog.com",
  }, {
  "id": 3,
  "email": "dkilshall2@elpais.com",
  }]
    

 console.log(mergeById(userNames, userEmails));
