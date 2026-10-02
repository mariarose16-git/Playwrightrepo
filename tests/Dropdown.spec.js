import {test} from '@playwright/test'


test('Drop down in Playwright',async({page})=>{

await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const Dropdown=page.locator('#dropdowm-menu-1');
await Dropdown.selectOption({index:1})

//await Dropdown.selectOption({value:'python'});
//await Dropdown.selectOption({label:'SQL'});
})


// drop down can be selected using Index value,text and value

test('Check Box in playwright',async({page})=>{

    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
    const checkbox=page.locator("//input[@value='option-2']");
    await checkbox.check();

})
// can use click() or check()
// use another click() or uncheck for unchecking

test.only('Radio button in playwright',async({page})=>{

    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
    const radiobutton=page.locator("//input[@value='blue']");
    await radiobutton.click();
})
