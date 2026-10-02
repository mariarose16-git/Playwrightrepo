import{test} from '@playwright/test'

test('Wait in Playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/simple-form-demo.php');

    await page.waitForLoadState('networkidle');

    const messageBox=page.locator('#single-input-field');
    await messageBox.fill('QA Test Message');
})