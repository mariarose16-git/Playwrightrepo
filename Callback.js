/*function greet(name)   // this will be used as callback fn
{
    console.log("Hello, "+name);
}



function processUser(callback) 
{
    let user="John";
    callback(user);
}
processUser(greet);  //use call back fn as arguement for another fn


*/
// with 2 parameter


function greet(name,age)   // this will be used as callback fn
{
    console.log("Hello, "+name +" "+age);
}



function processUser(callback) 
{
    let user="John";
    let userage=25;
    callback(user,userage);
}
processUser(greet);  //use call back fn as arguement for another fn


