// Different kinds of object creation

//1. Object literal format
const person={      // object name is person ,inside it key value pair. In object properties are there
    name:"Maria",
    age:29,
    greet()
    {
        console.log("Hello")
    }
}
console.log(person.name);   // to invoiceobject property
person.greet();             // invoke function

//2. Using new Object()

const employee=new Object();  // object creation using new Object constructor
employee.name="Maria";
employee.salary= 20000;
console.log(employee);


// JSON Object creation
// it is a text format to store and exchange data, it consist of key value pairs.
// string value should be in double cords (in key as weel as value)
//here only data in JSON ,not functions but in JS object data and function is possible
const student={
    "name":"Shani",
    "age":20,
    "department":"CS"

}
console.log(student);