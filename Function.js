//syntax
/*
function functionname()
{
}


//1. Non parameterized function

function greet()

{
    console.log("Hello");
}

//to execute a function you need to call or invoke
greet();

//
// Assignment

let a=20;
let b=30;
function addition()
{
    let sum=0;
    sum=a+b;
    console.log("Sum is "+sum);
}


function subtraction()
{
    let diff=0;
    diff=a-b;
    console.log("Difference is "+diff);
}
addition();
subtraction();


//2. Parameterized function

function message(yourmessage)
{
    console.log("Your message is "+yourmessage);

}

message("Hello");


//3. Function with return type
let a;
let b;
function add(a,b)
{
let c=a+b;    
return c;
    //or return a+b
}
console.log(add(20,10));
*/

//types of function :4. Arrow function"=>"

//syntax


/*
const functionName=()=>
{
    console.log()
}

*/

/*
const sampleMessage=()=>
{
    console.log("Hello World");

}
sampleMessage();

let x,y;

const addition1=(x,y)=>
{
    console.log(x+y);
}
addition1(10,5);

//5. arrow Function with return type

let i,j;
const additionreturn=(i,j)=>
{
    let l=i+j;
    return l;
}

console.log(additionreturn(10,10));
*/

//6. 
//In Java script defualt parameter allow you to assign a defualt value to a function if no value is passed


function guest(name ="default guest")  //parameterized fn
{
    console.log("Hello "+name)
}
//guest("Maria");
guest();



