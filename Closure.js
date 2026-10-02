function outer()
{
    let name="Shani";
    function inner()
    {
        console.log(name);

    }
    return inner;

}
const x=outer();
x();  //inner fn invoking ,just printing 