// wrapping data into single unit
// for data security
//for this variables will be private. only accesable within the class

class Student{

    #marks=90    // # denotes private to make marks private
    getMarks()
    {
        return this.#marks;
    }
}
const obj= new Student();
console.log(obj.getMarks());

// #marks will not get outside the class
//console.log(obj.#marks); // here private field cannot be got outside the class but we can use this field inside the function and invoice it.
//it  trows error
//we can declare data as private
