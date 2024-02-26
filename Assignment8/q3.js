const testAsyncFunction = () =>{
	return new Promise((resolve, reject) =>{
	if (Math.random() > 0.5) {
		resolve('Test Resolve');
	} else {
		reject('Test Reject');
	}
})
.catch((err) =>{
	console.log('Error caught in testAsyncFunction: ', err);
	});
};


testAsyncFunction()
	.then((res) =>{
	console.log('Response in then block: ', res);
})
.catch((err) => console.log('Error in catch block: ', err)); 

`
Output Exaplaination=>
When function is called, if the random condition resolves, the .then() block is executed and print 'Response in then block: Test Resolve' in the console.
and if the random condition rejects, the .catch() block is executed, with msg 'Error caught in testAsyncFunction: Test Reject'.
As there is no further .catch() attached directly to the testAsyncFunction() function, the error can't propagate beyond that point.
so, output is predicted. it depends on random value that is going to generate at execution of prog.
`
