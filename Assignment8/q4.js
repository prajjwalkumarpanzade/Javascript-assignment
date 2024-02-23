const testAsyncFunction = () =>{
	return Promise.reject('Test static reject');
};

testAsyncFunction()
	.then((res) =>{
		console.log('Response in then block', res);
	})
.catch((err) => console.log('Error in catch block', err));




`
Output Exaplaination=>
As the Promise is set to reject immediately, the .catch() block will be executed.
The .catch() block logs 'Error in catch block : Due to - Test static reject', as it catches the rejection reason which is 'Test static reject'.
we can't see anything logged by the .then() block, as the Promise is always in a rejected state and never resolves.
`
