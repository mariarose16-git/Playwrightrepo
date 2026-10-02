// Implementation details will be hidden, details needed for a user is seen.
/* example login instagram
as a user not able to see data base checking and verification but user will be able to see username entry field and password

*/
//here amount to get dynamic value from the obj.withdraw using
class ATM{

    withdraw(amount)
    {
     console.log(`${amount} withdrawn`); 
      // what ever value given in amount will be shown after $
     //can be written like that
     //console.log(`${amount} ` + "withdrawn")
    }
}
const obj= new ATM();
obj.withdraw(20);

// only amount is display to user not the backend process
