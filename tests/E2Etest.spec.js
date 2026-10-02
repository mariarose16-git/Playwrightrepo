import {test,expect} from '@playwright/test'

test('E2E Testing of saucedemo',async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.waitForLoadState('networkidle');

//login
const userName=page.locator('#user-name');
const password=page.locator("//input[@id='password']")
const loginButton=page.locator("//input[@value='Login']")

await userName.fill("standard_user");
await password.fill("secret_sauce");
await loginButton.click();

// add to cart
      await page.getByText('Add to cart').first().click();
      await page.getByText('Add to cart').nth(3).click();
      
//click on cart

    const clickCart = page.locator('.shopping_cart_link');
    await clickCart.click();

//check out

const checkoutClick= page.locator('#checkout');
await checkoutClick.click();

// fill details

const firstName= page.locator('#first-name');
await firstName.fill("Maria");

const lastName=page.locator('#last-name');
await lastName.fill("Mathew");

const postalCode=page.locator('#postal-code');
await postalCode.fill("682037");

const submit=page.locator("//input[@type='submit']");
await submit.click();

const finishButton=page.locator('#finish');
await finishButton.click();

// Assertion

await expect(page).toHaveTitle("Swag Labs");
//await expect(page).toContainText("Thank you for your order!")
await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html");


})