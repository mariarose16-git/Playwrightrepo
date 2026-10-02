/*let x=0;
try{
    //let result=10/x;
    if(x===0)
    {
     throw new Error("Cannot divide by 0");  // message: Cannot divide by 0
    }

    let result=10/x;
    console.log(result);
}
catch(error)
{
console.log("An Error Occured: ",error.message)
}

// In JS we cannot divide a value by 0, it causes infinity.
//it will not throw error if we just give let result=10/x it will not go to catch block
//catch block will not work
*/


try{
    sample(); // you are trying to call sample which is not there.TRY block code has created an error or exception. we know how error is thrown in terminal with same exception. instead of that catch code handled it. without throwing exception in terminal
}
catch(error)
{
    console.log("Error :",error.message);
}
finally{
    console.log("Execution finished");
}