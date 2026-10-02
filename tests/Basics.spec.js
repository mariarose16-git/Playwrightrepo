//always import testrunner in all spec file first
import {test} from '@playwright/test'  // help to write test case


// -------------First test : browser launch using traditional method----------------

test('Browser Launch in Playwright',async({browser})=>{ //create browser instance
const context=await browser.newContext()                // context created- browser luanch
const page=await context.newPage() // new page is created
await page.goto("https://selenium.qabible.in")
})  

// 1.create browser instance - for that give a fixture(ready  to use setup)- there are built in fixture
//this is traditional method

//2. create context








//---- 2. Page playwright Test------
//context fixtures:for creating incognito window
//page fixture: it for single browser handling -- need not need much steps
//
//test.only for running only selected Test not all test.
test.only('Page Playwright Test',async({page})=>{
await page.goto('https://selenium.qabible.in')
})
//test.only for running only selected Test not all test.
