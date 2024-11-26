import { test, expect, Browser, Page, Locator, chromium } from '@playwright/test';
import { firefox } from 'playwright';

test('open icc website',  async () => {
    const browser: Browser = await chromium.launch({ headless: false });
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


});