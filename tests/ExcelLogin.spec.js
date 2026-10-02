import{test} from '@playwright/test'
import { getData } from '../Utils/ExcelRead';

test('Login using excel',async({page})=>{
 
  const usernamevalue=getData(2,1);
  const passwordvalue=getData(2,2);
  await page.goto('https://www.saucedemo.com/') ;
 
  const usernamefield=page.locator('#user-name');
 await usernamefield.fill(usernamevalue);
  const passwordfield= page.locator('#password');
 await passwordfield.fill(passwordvalue);
  const loginButton = page.locator('#login-button');
  await loginButton.click();
})