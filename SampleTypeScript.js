"use strict";
let age = 28;
//age="Twenty eight" // error : type string cannot be assigned to type number.
//number of bugs will be decreased
// it will show errors in compile time itself without executing
age = 30;
console.log(age);
// reassignment can be done but type cannot be changed
/*
//if it was const , you cannot reassign

const age1:number=28;
age1=40;
console.log(age1); //here output will be error
*/
//============function========================
function greet() {
    console.log("Hello");
}
greet();
// parameterized fn
/*
function greet11(a:number,b:number):void{

}
*/
//parameterized fn with return type
function greet1(a, b) {
    return a + b;
}
console.log(greet1(10, 5));
// Anonimous fn
//fn without a name
let multiply = function (x, y) {
    return x + y;
};
console.log(multiply(10, 10));
