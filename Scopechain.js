let name="Maria" // global scope - it is declared in starting

function outer()
{
    let age=25; //Outer function scope
   function inner()
   {
    let city="Kochi"  // Inner function scope
    console.log(name);
    console.log(age);
    console.log(city);
   }

   inner();

}
outer();

