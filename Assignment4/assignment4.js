//What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break? Do statements after the loop run? What is the return value? Can we pass a return value from within a loop? Can you return from inside an if block? What impact does that have?
`
When we use return inside a loop, it will exit the loop and the function immediately exit. all iteration of loop will not be executed.

Similar to loops, using return inside a switch case block, will exit the function immediately.
Any code after the switch block will not be executed.

we can return fromm or inside if block. if the condition in the if statement is met, the function will return the specified value and exit immediately.
Any code after the if block will not be executed if the return statement.

using return inside loops, switch cases, or if blocks allows you to control the flow of your function and exit.

`




function ThankYou(){
    console.log("Calling the callback function !!");
    return 5;
}

function Namste(callback){
    console.log("Starting Namaste() Func...")
    var value = callback();
    console.log("Return Value : "+value)
    console.log("Ending Namaste() Func...")
}

Namste(ThankYou)

//Output =>

//Starting Namaste() Func...
//assignmnet1-Q1-A.html:11 Calling the callback function !!
//assignmnet1-Q1-A.html:18 Return Value : 5
//assignmnet1-Q1-A.html:19 Ending Namaste() Func...


//Cases -
//1.test(callbackFunc())
//Output=> Uncaught SyntaxError: Unexpected token '(' 

//2.test(() => callbackFunc())
//Output=> Uncaught SyntaxError: Unexpected token '('

//3.What happens when you return callback() from the test function?
//Calling the callback function
//5

//4.What happens when you return callback from the test function?
//returning callback from the test function allows the caller to decide when to execute the callback function.

