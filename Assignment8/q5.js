const testAsyncFunction = () =>{
	return new Promise((resolve, reject) =>{
	if (Math.random() > 0.5) {
		resolve('Test Resolve');
	} else {
		reject('Test Reject');
	}
}).catch((err) =>{
	console.log('Error caught in testAsyncFunction', err);
	throw new Error('Forced error');
	});
};

testAsyncFunction()
.then((res) =>{
	console.log('Response in then block: ', res);
	})
.catch((err) => console.log('Error in catch block: ', err));

`
 Output =>
    When function called, depending on the random condition, it may resolve or reject.
    If it resolves, the .then() block is executed, and print 'Response in then block: Test Resolve' on console.
    If it rejects, the .catch() block is executed. it logs 'Error caught in testAsyncFunction' followed by 'Forced error'.
    Therefore, the output is not fixed, depending on whether the Promise resolves or rejects.
`
