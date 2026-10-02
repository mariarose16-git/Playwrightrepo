import {expect} from '@playwright/test'
export class LoginPage{
    constructor(page){
        this.page=page;
        this.usernamefield=page.locator('#user-name');
        this.passwordfield=page.locator('#password');
        this.loginButton=page.locator('#login-button');
    }

    async navigateToApplication(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async applicationLogin(username,password){
   await this.usernamefield.fill(username);
   await this.passwordfield.fill(password);
   await this.loginButton.click();

    }

    async verifyInventoryPage(){
     await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
      // await expect(this.page.locator("//h3[text()='Epic sadface: Username and password do not match any user in this service']")).toHaveText("Epic sadface: Username and password do not match any user in this service");
    }

    async verifyLoginerrorpage(){
   // await expect(this.page.locator("//h3[text()='Epic sadface: Username and password do not match any user in this service']")).toHaveText("Epic sadface: Username and password do not match any user in this service");
      await expect(this.page).toHaveURL("https://www.saucedemo.com/");
    }


}