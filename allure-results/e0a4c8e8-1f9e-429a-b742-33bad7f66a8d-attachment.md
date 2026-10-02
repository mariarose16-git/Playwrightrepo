# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.js >> Login using valid user name and invalid password
- Location: tests\LoginPage.spec.js:23:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.error-button')
Expected: "Epic sadface: Username and password do not match any user in this service"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.error-button')
    14 × locator resolved to <button type="button" class="error-button" data-test="error-button">…</button>
       - unexpected value ""

```

```yaml
- button
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | import { LoginPage } from '../Pages/LoginPage';
  3  | import data from '../Utils/LoginCredentials.json' with {type:'json'}
  4  | 
  5  | test.only('Login using valid credentials',async({page})=>{
  6  | 
  7  |    //await page.goto("https://www.saucedemo.com/");
  8  |    //const userName=page.locator('#user-name');
  9  |    //await userName.fill("standard_user");
  10 |   // const password=page.locator('#password');
  11 |    //await password.fill("secret_sauce");
  12 |   // await page.locator('#login-button').click();
  13 | //   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  14 | const validusername= data.validusername;
  15 | const validpassword=data.validpassword;
  16 | const loginpage= new LoginPage(page);
  17 | await loginpage.navigateToApplication();
  18 | await loginpage.applicationLogin(validusername,validpassword);
  19 | await loginpage.verifyInventoryPage();
  20 | 
  21 | })
  22 | 
  23 | test('Login using valid user name and invalid password',async({page})=> {
  24 | await page.goto("https://www.saucedemo.com/");
  25 |    const userName=page.locator('#user-name');
  26 |    await userName.fill("standard_user");
  27 |    const password=page.locator('#password');
  28 |    await password.fill("secret_sauce1");
  29 |    await page.locator('#login-button').click();
  30 |   // const error=page.locator("//button[@type='button']");
  31 |   // await expect(page).toHaveContent("Epic sadface: Username and password do not match any user in this service")
> 32 |   await expect(page.locator('.error-button')).toHaveText("Epic sadface: Username and password do not match any user in this service");
     |                                               ^ Error: expect(locator).toHaveText(expected) failed
  33 | 
  34 |   //await expect(page).toHaveURL("https://www.saucedemo.com/")
  35 | 
  36 | })
  37 | 
  38 | test('Login using invalid username and valid password',async({page})=>{
  39 | 
  40 |     await page.goto("https://www.saucedemo.com/");
  41 |    const userName=page.locator('#user-name');
  42 |    await userName.fill("standard_user1");
  43 |    const password=page.locator('#password');
  44 |    await password.fill("secret_sauce");
  45 |    await page.locator('#login-button').click();
  46 |   await expect(page).toHaveURL("https://www.saucedemo.com/")
  47 | })
  48 | 
  49 | test('Login using invalid username and invalid password',async({page})=>{
  50 | 
  51 |     await page.goto("https://www.saucedemo.com/");
  52 |    const userName=page.locator('#user-name');
  53 |    await userName.fill("standard_user1");
  54 |    const password=page.locator('#password');
  55 |    await password.fill("secret_sauce1");
  56 |    await page.locator('#login-button').click();
  57 |   await expect(page).toHaveURL("https://www.saucedemo.com/")
  58 | })
  59 | 
  60 | 
  61 | // 4 testcases
```