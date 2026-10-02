let age:number=28;
//age="Twenty eight" // error : type string cannot be assigned to type number.
//number of bugs will be decreased
// it will show errors in compile time itself without executing
age=30;
console.log(age)
// reassignment can be done but type cannot be changed
/*
//if it was const , you cannot reassign

const age1:number=28;
age1=40;
console.log(age1); //here output will be error
*/
//============function========================

function greet():void{    // if there is not return type for function,write void
    console.log("Hello"); 
}
greet();


// parameterized fn
/*
function greet11(a:number,b:number):void{

}
*/
//parameterized fn with return type

function greet1(a:number,b:number):number{
    return a+b;
}
console.log(greet1(10,5));

// Anonimous fn

//fn without a name
// here multiply is the name used for fn
let multiply=function(x:number,y:number):number{
    return x+y;
}
console.log(multiply(10,10));
