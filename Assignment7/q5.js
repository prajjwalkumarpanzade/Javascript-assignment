let users = [{
  "id": 1,
  "first_name": "Nicki",
  "email": "ncrozier0@squarespace.com",
  "date_of_birth": "2009/05/09",
  "gender":"Male",
  }, {
  "id": 2,
  "first_name": "Raychel",
  "email": "rmcgrady1@cpanel.net",
  "date_of_birth": "1996/11/05",
    "gender":"Female"
  }, {
  "id": 3,
  "first_name": "Demetris",
  "email": "dkilshall2@elpais.com",
  "date_of_birth": "2018/12/31",
    "gender":"Male"
  }, {
  "id": 4,
  "first_name": "Amata",
  "email": "abraiden3@canalblog.com",
  "date_of_birth": "2012/05/23",
    "gender":"Female"
  }]

  function sort(array, key, order) {
    return array.sort((a, b) => {
      const valA = a[key];
      const valB = b[key];
  
      if (order === "asc") {
        return valA < valB ? -1 : valA > valB ? 1 : 0;
      } else if (order === "desc") {
        return valA > valB ? -1 : valA < valB ? 1 : 0;
      }
      else {
        return "Invalid input";
      }
    });
  }
  
  console.log(sort(users, "gender", "asc"));