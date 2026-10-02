import { Given,When,Then } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
//import{test} from '@playwright/test'
import assert from 'assert'

let browser;
let page;

Given('the user is on the login page',async function() {
   browser=await chromium.launch({headless:false}) 
    page=await browser.newPage()
    await page.goto('https://www.saucedemo.com/');
})

When('user enters valid username and password', async function() {
    const username=page.locator('#user-name');
    const password=page.locator('#password');
    const loginbutton=page.locator('#login-button')
    
    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginbutton.click();

})

Then('the inventory page should be displayed',async function() {
await page.locator('.inventory_item').first().isVisible(); 
 await browser.close();   
})

//Invalid login

When('user enters invalid credentials',async function() {
    const username=page.locator('#user-name');
    const password=page.locator('#password');
    const loginbutton=page.locator('#login-button')
    
    await username.fill('standard_user1');
    await password.fill('secret_sauce');
    await loginbutton.click();
})

Then('error message should be visible',async function() {
const error= await (page.locator('[data-test="error"]').textContent());  
assert.ok(error.includes('Username and password do not match'));
 await browser.close();    
})




