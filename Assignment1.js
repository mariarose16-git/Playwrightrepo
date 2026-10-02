// Abstraction

class Student{

    getmarks(mark)
    {
        console.log(`Total mark is ${mark} `);
    }
}
const obj1= new Student();
obj1.getmarks(100);

// Polymorphism

class MBA{

    getsubject()
    {
        console.log("Subject is English");
    }

}
class BBA extends MBA{
    getsubject()
    {
        console.log("Subject is Computer");

    }
}
const obj2= new BBA();
obj2.getsubject();
const obj3= new MBA();
obj3.getsubject();


// Inheritance

class School{

    name()
    {
        console.log("School name is Rajagiri");
    }

}

class Sylabus extends School{

    getsylabus()
    {
        console.log("Sylabus is CBSE")
    }
}
const obj4= new Sylabus();
obj4.name();
obj4.getsylabus();

// Encapsulation

class Citizen{
    #age=20;
    getage()
    {
        return this.#age;
    }
}
const obj5= new Citizen();
console.log(obj5.getage());


