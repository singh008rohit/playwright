import { test, expect, Browser, Page, Locator, chromium } from '@playwright/test';
import { firefox } from '@playwright/test';
import { promises } from 'dns';
import { Context } from 'vm';



test('new test test.step()', async({page})=>{

await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

await page.locator('#confirmbtn').click();
await page.on('dialog',async d=>d.accept());
const frame= page.frameLocator('#courses-iframe')
await frame.getByRole('link', { name: ' Register' }).click();
console.log('Test Info:', test.info());

const [newPage]=await Promise.all([

   page.context().waitForEvent('page'),
    page.locator('#opentab').click(),
]);

expect(newPage.url()).toBe('https://www.qaclickacademy.com/');
await newPage.mouse.dblclick(200,300,{delay:100});
//await newPage.mouse.click(100,100,{button:'right'});
await newPage.mouse.click(0,100,{button:'left'})
await newPage.mouse.wheel(0,100);



});

test('practice on keyboard event',async ()=>{

    const browser:Browser= await chromium.launch();
    const context:Context= await browser.newContext();
    const page:Page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  

await page.keyboard.insertText("my name is rohit singh");
await page.keyboard.press('ArrowLeft');
await page.keyboard.down('Shift');

for(let st =0;st< 'singh'.length;st++){

   
    await page.keyboard.press('ArrowLeft');

}
await page.keyboard.press('Backspace');
await page.keyboard.up('Shift');
//page.locator('').setInputFiles('' );

    


});

