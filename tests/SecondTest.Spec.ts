import { test, expect, Browser, Page, Locator, chromium } from '@playwright/test';
import { firefox } from 'playwright';

test('login test 2',  async () => {
    const browser: Browser = await chromium.launch();
     const page:Page =await  browser.newPage();
     
     test.setTimeout(40000);
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    test.setTimeout(45000);

    const firstRadio:Locator = page.locator("xpath=//input[@value='radio1']");
    const checkbox:Locator = page.locator("xpath=//input[@value='option1']");
    const suggestion:Locator= page.locator("xpath=//input[@id='autocomplete']");
    const dropDown:string ="#dropdown-class-example";
    const title:string= "Practice Page";
    const login:Locator =await page.frameLocator("id=courses-iframe").getByText("LOGIN");

    const atualtitle:string=await page.title();
    console.log("title of the page =  "+atualtitle);


expect.soft(title,"new message").toBe(atualtitle);
   await firstRadio.click();
  await  checkbox.click();
  await page.selectOption(dropDown, { value: 'option2' });
  await login.click();
  await page.screenshot({ path: 'screenshot3.png' });
  await login.screenshot({ path: 'screenshot1.png' });
  const selectedOption = await page.$eval('select#dropdown-class-example', el => (el as HTMLSelectElement).value);
  await page.mouse.click(100, 200,{ button: 'right' });
  console.log(selectedOption);
await page.type('input#autocomplete', 'India', { delay: 500 });
expect.soft(selectedOption,"drop is not selected as expected").toBe('option2');
await page.screenshot({ path: 'screenshot.png' });
await page.keyboard.type("my name is rohit",{ delay: 100 });
await page.keyboard.press("Enter");
await page.mouse.click(100, 200,{ button: 'right' });







});