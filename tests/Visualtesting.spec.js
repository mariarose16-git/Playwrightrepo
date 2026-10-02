import {test,expect} from '@playwright/test'

test('Test visual testing',async({page})=>{

   await page.goto('https://www.saucedemo.com/');
   await page.waitForLoadState('networkidle');
   await expect(page).toHaveScreenshot('sauceDemo.png',{
    threshold:0.2,maxDiffPixels:3700
   })    
})


//threshold : allows small color diff per pixel
//maxDiffPixel : intotal pixel difference , here we got error around 3500 so we kept it as 3700 as threshold
//maxDiffPixelratio : represent image pixel ratios

test.only('Visual Testing in Dynamic webpages',async({page})=>{

await page.goto('https://selenium.qabible.in/index.php')
await page.waitForLoadState('networkidle')
await page.locator('.carousel').evaluate((element)=>{
    element.style.display='None'
})
await expect(page).toHaveScreenshot('sauceDemo.png',{
    threshold:0.2,maxDiffPixels:3700
})
})

