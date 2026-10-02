import {test} from '@playwright/test'

test.only('Lauching Browser',async({page})=>{

    await page.goto('https://selenium.qabible.in')

})