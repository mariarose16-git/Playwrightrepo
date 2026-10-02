//Loop -> execution-> Iteration or Looping
//to execute more than 1 time

/*
//1.  FOR Loop
//let i=1;
//or
for(let i=1;i<=5;i++)
{
console.log(i);
}

//2. while loop
let i=1;
while(i<=5)
{
    console.log(i);
    i++;
}



//3. for..of

for(let variable of iterable)
{
}

//4. for..in
//syntax
for(let key in object)
{
}

//eg
let employee=
{//key
    name:"Maria",
    age:30,
    role:"Tester"
}
for(let key in employee)
{
    console.log(key);
}
*/

//5. Break
//same as switch
// to stop the execution inbetween

//6. Continue
for(let k=1;k<=5;k++)
{
    if(k===3)
    {
        continue;
    }
    console.log(k);
}