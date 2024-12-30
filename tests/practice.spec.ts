import { chromium, expect,test, Browser,Page, Locator, Frame } from "@playwright/test";
import { Context } from "vm";

test('adding a new test',async()=>{

    const browser:Browser = await chromium.launch({headless:false});

    const page:Page = await browser.newPage();

    await page.goto("https://www.google.com/");

  // const loginbuton:Locator=await page.getByRole('button',{name:'submit'});
 //  await page.selectOption('select#option',{index:2});

  // loginbuton.click();

    browser.close();




});

test('handel javascript popup',async({page})=>{

   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   
const confirm:Locator= page.locator("#confirmbtn");
await confirm.click();
console.log("=========================="+page.on('dialog',dialog=>dialog.message()));
page.on('dialog',dialog=>dialog.accept);



});

test('handel frame',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const frameElement =page.frameLocator("#courses-iframe");

   const str= await frameElement.locator('.icon.fa.fa-envelope').allTextContents();
   console.log("+++++++"+ str);

    await frameElement.getByRole('button',{name:'Login'}).click

})


test('handel multiple windows',async({browser})=>{

    const browserCont:Context= await browser. newContext();
    const page:Page = await browserCont.newPage();

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

   const [newPage]=await Promise.all([

   
   
    browserCont.waitForEvent('page'),
    page.locator('.blinkingText').click(),

   
])
await newPage.locator('.hero_register_btn').click();

})