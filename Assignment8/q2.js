const fetchData = () => {
	return new Promise ((resolve, reject) => {
  	var data = fetch('https://reqres.in/api/users')
      	if (data) {
        	resolve('Data Found....!');
		console.log(data);
      }
	else {
		reject("Oops..no data found");
     
    }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
};

document.getElementById("data").innerHTML = fetchData();


