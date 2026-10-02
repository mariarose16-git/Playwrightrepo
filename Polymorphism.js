class Playwright{

    learn()
    {
        console.log("Learning Playwright");
    }
}

class Javascript extends Playwright{

    learn()
    {
        console.log("Learning Javascript");
    }
}

const obj1= new Javascript();  // object for Class javascript
obj1.learn();
const obj2= new Playwright(); // obj for class playwright
obj2.learn();

// we use same function name for diff classes with diff actions 
