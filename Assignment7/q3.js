let users = [{
  "id": 1,
  "first_name": "Nicki",
  "email": "ncrozier0@squarespace.com",
  "date_of_birth": "2009/05/09"
  }, {
  "id": 2,
  "first_name": "Raychel",
  "email": "rmcgrady1@cpanel.net", 
  "date_of_birth": "1996/11/05"
  }];

function mapBy(users,value) {
  let newobj = {};
  for (const i in users) {
    newobj[users[i][value]] = users[i];
    // console.log(users[i][value]);
}
console.log(newobj);
};

value = 'email'
mapBy(users,value);
