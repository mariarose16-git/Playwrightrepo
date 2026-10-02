
//Array used to store multiple values of same type
//1. Array literal format
/*
let course=["MBA","BBA","BTECH","MA"];
console.log(course);


//---2. Empty array--

let numbers=[];  // array creation
numbers[0]=10; // 0 is index value
numbers[1]=20;
numbers[2]=30;
console.log(numbers);

//----3.aRRAY Constructor---

let colors= new Array("Black","Blue","Yellow")
console.log(colors);

//----4. Creating Array with specific size---

let myArray= new Array(5); // here we created size 5 for array
console.log(myArray);
console.log(myArray.length); // lenght of array


//----5. Creating Array using array of function

let num= Array.of(10,20,30);
console.log(num);


// ----6. inserting elements to array using push function--

let myNum=[];
myNum.push(20);
myNum.push(30);
myNum.push(40);
console.log(myNum);

// ------- Iteration in Array------

//---1. Iteration using for loop----

let fruits=["Apple","Orange","Grapes","Banana"]
for(let i=0;i<fruits.length;i++) // or i<=2 since index starts from 0
{                                 // if array.length dont use <= ,use =
    console.log(fruits[i]);
}


//---2. Iteration using for..of loop----  

let fruits1=["Apple","Orange","Grapes","Banana"]
for(let fruit of fruits1)
{
    console.log(fruit);

}


//---2. Iteration using for..each loop----  

let fruits2=["Apple","Orange","Grapes","Banana"]
fruits2.forEach(function(fruit){

    console.log(fruit)
})

//---2. Iteration using for..in loop----  
// we also able to fetch index position in for in
let fruits3=["Apple","Orange","Grapes","Banana"]
for(let index in fruits3)
{
    console.log(index,fruits3[index]);

}


// Map functions
// using map ,creation mew array based pn the existing array by transforming the values

let numbers1=[1,2,3]
let double=numbers1.map(num=>num*2) // new array with transformmed value
//num is predefined for calculation to transform the value in map and filter
console.log(double);


// Filter function
// condition base arrray value fectching
//filter function doesnot modify original array
let num1=[10,20,30,40];
//console.log(num1.filter(num=>num>15));
let newArray=num1.filter(num=>num>15);
console.log(newArray);
console.log(num1);

//Find Function
console.log(num1.find(num=>num>15));
// we get a single value in find function -> first match
// but in filter we get a array of value returned
// filter if no matching value is there then it shows empty array but in find it will show undefined

let num2=[1,2,3,4]
let newArray=num2.filter(num=>num>15);
console.log(newArray);
console.log(num2.find(num=>num>15));

*/
// -----------------Functions in  Array----------------

//-------1. Push-------
//-------2.Find-------
//-------3.Filter---------
//--------4.Map----
//-------4. Pop----------

// to remove last element -> o/p PHP will be removed from array
let languages=["Java","Phyton","Cobol","PHP"];
languages.pop();
console.log(languages);

//-------5. Unshift-----
// to add elements in the begining to array
languages.unshift("C#", "php") // we can add multiple vallues
console.log(languages);

//-------6. Shift-----
// to remove first elements to array

languages.shift();
console.log(languages);

//-----7. Includes------
// checking this value is available in array
console.log(languages.includes("Phyton"));
console.log(languages.includes("C"));

// 8. ---- index of--------

//to  return the index of element

console.log(languages.indexOf("Cobol"));

//9. ===reverse----
// to reverse the array

languages.reverse();
console.log(languages);
console.log(languages.reverse());

