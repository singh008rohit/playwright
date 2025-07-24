import { test, expect, Browser, Page, Locator, chromium } from '@playwright/test';
import { firefox } from '@playwright/test';
import { promises } from 'dns';
import { Context } from 'vm';

test('open icc website',  async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const context:Context = await browser.newContext();
     const page:Page =await  browser.newPage();
     const actualTitle:string = "ICC Women's T20 World Cup, 2024";
     const actualText:string ="Umpires named for the ICC Women’s T20 World Cup 2024 semi-finals";
    // test.setTimeout(40000);
    await page.goto("https://www.icc-cricket.com/tournaments/womens-t20-worldcup");
    const pageText:Locator=page.locator("xpath=//h2[@class='text-white font-h1 max-w-[600px]']");
    //test.setTimeout(45000);
    const expectedTitle:string= await page.title();
    expect.soft(actualTitle,"actual and expected title is matched").toBe(expectedTitle);
    console.log("text from site    "+await pageText.textContent());
    console.log("static text  "+actualText);
    expect.soft(await pageText.textContent()).toContainEqual(actualText);
    const newpage=await Promise.all([
        context.waitForEvent('page'),
        page.locator('').click(),
    ]);
    await browser.close();
});


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

