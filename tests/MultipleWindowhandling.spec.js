import {test,expect} from '@playwright/test'

test('Multiple window handling',async({page,context})=>{

    await page.goto("https://demo.guru99.com/popup.php");
    const newWindow= context.waitForEvent('page');   //wait till page load in new window  // it starts waiting for a new page or window //we need to be prapared to handle before it is comingfor multiple window and alert
    const clickHere= page.locator("//a[text()='Click Here']");
    clickHere.click();

    const popup=await newWindow;
    await popup.waitForLoadState(); //wait until popup is acrually created

    await popup.locator("//input[@name='emailid']").fill("aaa@gmail.com");
    await popup.locator("//input[@type='submit']").click();

    
})

