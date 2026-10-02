// mainly used in API calls not in simple programs
const promise= new Promise((resolve,reject)=>{
let success=true;
if(success)
{
    resolve("Login Successfull");
}
else{
    reject("Login failed");
}

})

promise
.then(result=> console.log(result))
.catch(error=> console.log(error))
.finally(()=>console.log("Request finished"))