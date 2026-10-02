import {test,expect} from '@playwright/test'
import {Signup} from '../Pages/Signup';

//import data from '../Utils/LoginCredentials.json' with {type:'json'}

test('Signup by entering data',async({page})=>{

    const signup1= new Signup(page);
    await signup1.navigateToApplication();
});