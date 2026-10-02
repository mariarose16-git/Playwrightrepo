import {test} from '@playwright/test'


test('Locators in Playwright',async({page})=>{


await page.goto('https://selenium.qabible.in/simple-form-demo.php')
const messageBox=page.locator('#single-input-field') //id locator
const valueBox=page.locator('.form-control')         //class locator
const showMessageButton=page.locator("//button[@id='button-one']")
await messageBox.fill('Deepak');
await messageBox.fill("Alan");
await showMessageButton.click();
})


test.only('Special Locator',async({page})=>{
    await page.goto('https://groceryapp.uniqassosiates.com/admin/login')
    const userName=page.locator("//input[@name='username']")
    await userName.fill("admin")
    const password=page.locator("//input[@name='password']")
    await password.fill("admin")

    const signin=page.locator("//button[@type='submit']")
    await signin.click();
// special locators
    await page.goto('https://groceryapp.uniqassosiates.com/admin/list-admin');
   // await page.getByRole('button',{name:'Active'}).nth(0).click();
      await page.getByText('Active').first().click();
      // first() or nth(0)

})