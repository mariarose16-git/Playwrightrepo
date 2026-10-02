import {test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage';
import data from '../Utils/LoginCredentials.json' with {type:'json'}

test('Login using valid credentials',async({page})=>{

   //await page.goto("https://www.saucedemo.com/");
   //const userName=page.locator('#user-name');
   //await userName.fill("standard_user");
  // const password=page.locator('#password');
   //await password.fill("secret_sauce");
  // await page.locator('#login-button').click();
//   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
const validusername= data.validusername;
const validpassword=data.validpassword;
const loginpage= new LoginPage(page);
await loginpage.navigateToApplication();
await loginpage.applicationLogin(validusername,validpassword);
await loginpage.verifyInventoryPage();

})

test('Login using valid user name and invalid password',async({page})=> {
  //await page.goto("https://www.saucedemo.com/");
   //const userName=page.locator('#user-name');
   //await userName.fill("standard_user");
   //const password=page.locator('#password');
   //await password.fill("secret_sauce1");
   //await page.locator('#login-button').click();
  // const error=page.locator("//button[@type='button']");
  //await expect(page.locator('.error-button')).toHaveText("Epic sadface: Username and password do not match any user in this service");

  const validusername = data.validusername;
  const invalidpassword= data.invalidpassword;
  const loginpage1= new LoginPage(page);
  loginpage1.navigateToApplication();
  loginpage1.applicationLogin(validusername,invalidpassword);
  loginpage1.verifyLoginerrorpage();

})

test('Login using invalid username and valid password',async({page})=>{

   /*await page.goto("https://www.saucedemo.com/");
   const userName=page.locator('#user-name');
   await userName.fill("standard_user1");
   const password=page.locator('#password');
   await password.fill("secret_sauce");
   await page.locator('#login-button').click();
  await expect(page).toHaveURL("https://www.saucedemo.com/") */

  const invalidusername= data.invalidusername;
  const validpassword= data.validpassword;
  const loginpage2= new LoginPage(page);
  loginpage2.navigateToApplication();
  loginpage2.applicationLogin(invalidusername,validpassword);
  loginpage2.verifyLoginerrorpage();


})

test('Login using invalid username and invalid password',async({page})=>{

   /* await page.goto("https://www.saucedemo.com/");
   const userName=page.locator('#user-name');
   await userName.fill("standard_user1");
   const password=page.locator('#password');
   await password.fill("secret_sauce1");
   await page.locator('#login-button').click();
  await expect(page).toHaveURL("https://www.saucedemo.com/") */

  const invalidusername= data.invalidusername;
  const invalidpassword=data.invalidpassword;
  const loginpage3= new LoginPage(page);
  loginpage3.navigateToApplication();
  loginpage3.applicationLogin(invalidusername,invalidpassword);
  loginpage3.verifyLoginerrorpage();
})


// 4 testcases