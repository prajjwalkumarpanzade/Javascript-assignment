//1.
function findSquare(num){
    return num*num
}
console.log(findSquare(11));


//2.
const square = (num)=>{
    return num*num
}
console.log(square(13))


//3.
const getSquare = (num)=>{ console.log(num*num) }
getSquare(15);


//4.
function mySquare(num){
    return ()=>{
        return num*num
    }
}
const result = mySquare(17)
console.log(result(19))
