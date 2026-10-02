# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.js >> Login using valid user name and invalid password
- Location: tests\LoginPage.spec.js:23:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/inventory.html"
Received: "https://www.saucedemo.com/"

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - waiting for "https://www.saucedemo.com/" navigation to finish...
    - navigated to "https://www.saucedemo.com/"
    5 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://www.saucedemo.com/"
  - Test ended.

```

# Test source

```ts
  1  | import {expect} from '@playwright/test'
  2  | export class LoginPage{
  3  |     constructor(page){
  4  |         this.page=page;
  5  |         this.usernamefield=page.locator('#user-name');
  6  |         this.passwordfield=page.locator('#password');
  7  |         this.loginButton=page.locator('#login-button');
  8  |     }
  9  | 
  10 |     async navigateToApplication(){
  11 |         await this.page.goto("https://www.saucedemo.com/");
  12 |     }
  13 | 
  14 |     async applicationLogin(username,password){
  15 |    await this.usernamefield.fill(username);
  16 |    await this.passwordfield.fill(password);
  17 |    await this.loginButton.click();
  18 | 
  19 |     }
  20 | 
  21 |     async verifyInventoryPage(){
> 22 |      await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
     |                              ^ Error: expect(page).toHaveURL(expected) failed
  23 |       // await expect(this.page.locator('.error-button')).toHaveText("Epic sadface: Username and password do not match any user in this service");
  24 |     }
  25 | 
  26 | 
  27 | }
```