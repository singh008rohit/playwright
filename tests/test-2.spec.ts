import { test, expect,Browser,Page,chromium } from '@playwright/test';
import { Context } from 'vm';
test.describe.configure({mode:'parallel'})
test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.getByRole('button', { name: 'Alert' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  console.log("hi my name is rohit");
  page.close();
});


test('test paraller or in series',async()=>{

const browser:Browser= await chromium.launch();
const context:Context= await browser.newContext();
const page:Page= await context.newPage();

await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

page.close();

})
test('validiting javascript alerts',async()=>{

  const browser1:Browser= await chromium.launch();
  const context:Context= await browser1.newContext();
  const page1:Page= await context.newPage();

  await page1.goto("https://rahulshettyacademy.com/AutomationPractice/");
  let alertMessage = "";

  page1.on('dialog', async dialog => {
    alertMessage = dialog.message();  // capture alert text
    await dialog.accept();            // or dialog.dismiss()
  });
  
  await page1.click('#alertbtn');  // trigger the alert
  
  console.log("Alert message:", alertMessage);
  page1.close();

})
