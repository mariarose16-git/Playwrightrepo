import {test,expect} from '@playwright/test'


test.only('Calender Validation in Playwright',async({page})=>{

await page.goto('https://selenium.qabible.in/date-picker.php');
const dateinput= page.locator('#single-input-field');
await dateinput.click();

const targetYear=1997;

await expect(page.locator('.datepicker-dropdown')).toBeVisible();  // ensure calender is visible,wait till calender dropdown
const monthYearbutton=page.locator('.datepicker-switch:visible') //only to consider the elements which are visible and to ignore the element which are hidden , ie there may be many element with same class
await monthYearbutton.click();
await monthYearbutton.click();

let attempt=10; // within this attempt we need to find the target year
// attempt should get reduced 
while(attempt--)
{
    // fetch decade text and we need to trim it and fetch the start year
    //1. trim
    const decadeText=await monthYearbutton.innerText();
    const startYear=parseInt(decadeText.split('-')[0].trim());
    if(targetYear>=startYear&&targetYear<=startYear+9)
    {
        break;
    }
    await page.locator('.prev:visible').click();
    await page.locator('')
}
await page.locator('.year:visible').filter({hasText:'1997'}).click();
await page.locator('.month').filter({hasText:'Aug'}).click();
await page.locator('.day:not(.old):not(.new)',{hasText:/^2$/}).click();
const showDatebutton=page.locator('#button-one');
await showDatebutton.click();
})