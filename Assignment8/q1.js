//1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument
`Example:
const func = async () => {
 console.log(“Printing before”)
 //Call your function here eg. sleep(3000)
 console.log(“Printing after”)
}`
const sleep = (time)=>{
    setTimeout(() => {
        console.log("Inside the sleep func(), stopped execution for ",time);
    }, time);
}

const func = async () => {
    console.log("Printing before")
    // sleep(1500);
    sleep(3000);
    console.log("Printing after")
}

func().then(()=>{
    console.log("Successfully Executed !!");
}).catch(()=>{
    console.log("Caught error !!");
}).finally(()=>{
    console.log("inside Finally block !!");
});
