console.log(a); // value  is not assigned for a here so it will show o/p undefined.
                //only variable declaration can be hoisted, value assigning cannot be hoisted
var a=10;
console.log(a);   

/*
//TDZ(TEMPORAL DEAD ZONE)

//console.log(b);       //In let and const can be hoisted,but error will the o/p until it is declared.this is TDZ
let b=20;
console.log(b);
*/
//Function Hoisting

//function can be called before it is declared.
//hoisted without restrictions
greet();
function greet()
{
    console.log("Hello")
}

