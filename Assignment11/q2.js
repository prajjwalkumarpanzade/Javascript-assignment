function* fibonacci(end){
    let val1=0, val2=1, result=1;
    yield val1;
    yield val2;
    while(result <= end){  
        val1 = val2;
        val2 = result;
        result = val1+val2;
        yield result;
    }
}

let output = fibonacci(200);
for(let value of output){
    console.log(value);
}
