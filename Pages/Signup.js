import { expect } from '@playwright/test'
export class Signup{
    constructor(page){
        this.page=page;
        this.signup=page.locator(#signin2);
        this.signupuname=page.locator(#sign-username);
        this.signuppassword=page.locator(#sign-password);
        this.sigupbutton=page.locator(#btn-primary);
    }

    async navigateToApplication(){
        await this.page.goto("https://www.demoblaze.com/");
    }
}