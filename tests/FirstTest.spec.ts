import { test, expect, Browser, Page, Locator, chromium } from '@playwright/test';
import { firefox } from 'playwright';

test('login test',  async () => {
  const browser: Browser = await chromium.launch();
   const page:Page =await  browser.newPage();
   
   test.setTimeout(40000);
  await page.goto("https://testerwork.com/");
  test.setTimeout(45000);
 // await expect(page).toHaveTitle(/Book Your Free Demo | OrangeHRM/);
  //test.setTimeout(10000);
  const login:Locator= page.locator("xpath=//li[@id='menu-item-85']//a[contains(text(),'Login')]");
  const emailField: Locator =  page.locator("xpath=//input[@name='email']");
  const passwordField: Locator =  page.locator("xpath=//input[@name='password']");
  //const submitButton:Locator = page.locator("xpath=//button[@type='submit']");
 
  await login.click();
  await emailField.fill("singh");
  await passwordField.fill("namr");
  //await submitButton.click();

  // Your test actions here

 // await browser.close(); // It's good practice to close the browser after the test
});