class UserNotFound extends Error{ // we are customizing our on error message using class UserNotFound, Error is predifined class
    constructor(message)
{
    super(message);  // super keyword to refer the parent class obj

    }
}
function login(username)
{
    if (username!=="Admin")
    {
        throw new UserNotFound("Invalid username")
    }
    else{
        console.log("Login successfull")
    }
}
login("Admin");