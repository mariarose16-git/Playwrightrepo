//Frames handling - 

import {test,expect} from '@playwright/test'

test.only('Handling Frames in Playwright',async({page})=>{

    page.goto("https://demoqa.com/frames");
    const frame=page.frameLocator('#frame1');
    console.log(await frame.locator('#sampleHeading').textContent());
})
