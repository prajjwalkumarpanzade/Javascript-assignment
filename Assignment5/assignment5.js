//What is the difference between ++i and i++?

//Answer=> 
//++i (pre-increment): given operator increments the value of i by 1 and then returns the incremented value.
//i.e. if value of i=3 then firstly it will make it 4 and then return 4.

//i++ (post-increment): givan operator increments the value of i by 1, but it returns the original value of i before the increment
//i.e. if value of i=3 then firstly it will return value 3 and then increment value by 1 so it becomes 4.


//What do you think would happen if you pass an index beyond the range of the string? Or if you pass a negative index? Try it out.

//Answer=>
//If we try to access a value in a string using an index beyond the range of the string or with negative index, JavaScript will return undefined. 

let myStr = "JOSH !!";
console.log(myStr[1000])    //Output=> undefined
console.log(myStr[-1])  //Output=> undefined


//Do you think JSON.stringify would work for arrays as well? What about nested objects? What happens if we pass numbers, strings, undefined, null to JSON.stringify?

//Answer=>
//JSON.stringify() works not only for objects but also for arrays, so it converts array as well.

console.log(JSON.stringify(undefined)); // Output: "null"


console.log(JSON.stringify(null)); // Output: "null"

let arr = [1, "two", { three: 3 }];
console.log(JSON.stringify(arr));   // Output: "[1,"two",{"three":3}]"



//What happens if you pass a regular/invalid JSON string to JSON.parse? What will happen if such an invalid function runs in the program? Will other parts of the code execute correctly after that?


//If we pass JSON string to JSON.parse(), it will successfully parse the string. but if you pass an invalid JSON string, JSON.parse() will throw a SyntaxError.
//but, for the smooth execution of program, we have to make some provision for it like adding that code in try catch block.


//let invalidJSON = {
  //  "Name": "Prajjwalkumar", 
    //"Age": 23,
   // "city":
//};
//let parseObj;

try {
    parseObj = JSON.parse(invalidJSON);
    console.log(parseObj); // This line won't execute if there's an error
} catch (error) {
    console.error(error); // Output: SyntaxError: Unexpected token } in JSON at position 24
}

console.log("Continues Code Execution :)");
