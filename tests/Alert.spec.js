import {test,expect} from '@playwright/test'

test('Alerts in Playwright',async({page})=>{

    await page.goto("https://selenium.qabible.in/index.php");
    //seek help of listener,get prepared before clicking alert
    page.on('dialog',async dialog =>{
    expect(dialog.message()).toBe('I am a Javascript alert box!');
    await dialog.accept();
    
    const clickmeButton=page.locator('.btn btn-success');
    await clickmeButton.click();

})
})