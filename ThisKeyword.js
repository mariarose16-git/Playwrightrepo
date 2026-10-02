const person={    //object, in this obj namr property is there and a funtion greet is there

    name:"Anu",
    greet()
    {
       console.log("The name is "+this.name ) //you can use current object property
    }
}
person.greet();