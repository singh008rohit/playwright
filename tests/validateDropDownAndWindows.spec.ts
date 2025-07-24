import {test, Page, expect, Browser, chromium, Locator,BrowserContext} from "@playwright/test";

test('validating able to switch to new window and then move back to previously open window',async()=>{

    const browser:Browser = await chromium.launch();
    const context = await browser.newContext();
    const page :Page= await context.newPage();

    page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    
const openWindowLink:Locator= page.locator("#openwindow");
const [newPage]=await Promise.all([
    context.waitForEvent('page'),
    openWindowLink.click(),


]);
await expect(newPage).toHaveTitle("QAClick Academy - A Testing Academy to Learn, Earn and Shine");

console.log(await newPage.title());


});

test('validiting javascript alerts',async()=>{

    const browser:Browser= await chromium.launch();
    const context:BrowserContext= await browser.newContext();
    const page1:Page= await context.newPage();

    await page1.goto("https://rahulshettyacademy.com/AutomationPractice/");
    let alertMessage = "";

    page1.on('dialog', async dialog => {
      alertMessage = dialog.message();  // capture alert text
      await dialog.accept();            // or dialog.dismiss()
    });
    
    await page1.click('#alertbtn');  // trigger the alert
    
    console.log("Alert message:", alertMessage);



});


