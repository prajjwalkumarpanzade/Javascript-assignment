const myPromise = ()=> new Promise((resolve,reject)=>{
        let response = fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(data => {
            if(data){
                console.log("Before resolve...");
                setTimeout(()=>{
                    resolve(data);
                },2000)
                console.log("After resolve...");
            }else{
                reject("Error !!");
            }
        })
});

myPromise().then(
    (msg)=> console.log("Resolved : ",msg)
).catch(
    (err)=> console.log(err)
);
