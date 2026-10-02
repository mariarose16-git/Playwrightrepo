# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.js >> Login using valid user name and invalid password
- Location: tests\LoginPage.spec.js:21:5

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
  3  | 
  4  | test('Login using valid credentials',async({page})=>{
  5  | 
  6  |    //await page.goto("https://www.saucedemo.com/");
  7  |    //const userName=page.locator('#user-name');
  8  |    //await userName.fill("standard_user");
  9  |   // const password=page.locator('#password');
  10 |    //await password.fill("secret_sauce");
  11 |   // await page.locator('#login-button').click();
  12 | //   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  13 | 
  14 | //const loginpage= new LoginPage(page);
  15 | //await loginpage.navigateToApplication();
  16 | await loginpage.applicationLogin();
  17 | await loginpage.verifyInventoryPage();
  18 | 
  19 | })
  20 | 
  21 | test('Login using valid user name and invalid password',async({page})=> {
  22 | await page.goto("https://www.saucedemo.com/");
  23 |    const userName=page.locator('#user-name');
  24 |    await userName.fill("standard_user");
  25 |    const password=page.locator('#password');
  26 |    await password.fill("secret_sauce1");
  27 |    await page.locator('#login-button').click();
  28 |   // const error=page.locator("//button[@type='button']");
  29 |   // await expect(page).toHaveContent("Epic sadface: Username and password do not match any user in this service")
> 30 |   await expect(page.locator('.error-button')).toHaveText("Epic sadface: Username and password do not match any user in this service");
     |                                               ^ Error: expect(locator).toHaveText(expected) failed
  31 | 
  32 |   //await expect(page).toHaveURL("https://www.saucedemo.com/")
  33 | 
  34 | })
  35 | 
  36 | test('Login using invalid username and valid password',async({page})=>{
  37 | 
  38 |     await page.goto("https://www.saucedemo.com/");
  39 |    const userName=page.locator('#user-name');
  40 |    await userName.fill("standard_user1");
  41 |    const password=page.locator('#password');
  42 |    await password.fill("secret_sauce");
  43 |    await page.locator('#login-button').click();
  44 |   await expect(page).toHaveURL("https://www.saucedemo.com/")
  45 | })
  46 | 
  47 | test('Login using invalid username and invalid password',async({page})=>{
  48 | 
  49 |     await page.goto("https://www.saucedemo.com/");
  50 |    const userName=page.locator('#user-name');
  51 |    await userName.fill("standard_user1");
  52 |    const password=page.locator('#password');
  53 |    await password.fill("secret_sauce1");
  54 |    await page.locator('#login-button').click();
  55 |   await expect(page).toHaveURL("https://www.saucedemo.com/")
  56 | })
  57 | 
  58 | 
  59 | // 4 testcases
```