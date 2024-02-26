const myPromise = async ()=> {
        let response = await fetch("https://reqres.in/api/users");
        const data = await response.json()
        if(data){
            console.log("Before resolve...");
             setTimeout(()=>{
                console.log(data);
            },2000)
            console.log("After resolve...");
        }
}

myPromise().then(
    ()=> console.log("Resolved !!")
).catch(
    ()=> console.log("Error Occurred !!")
);
