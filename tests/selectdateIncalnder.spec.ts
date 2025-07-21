import {test, Page,expect ,Browser,chromium} from "@playwright/test";
import { Context } from "vm";

test('select calander from make my trip site',async()=>{

    const browser:Browser =await chromium.launch();
   const context:Context=await browser.newContext();
   const page:Page= await context.newPage();

    await page.goto("https://www.makemytrip.com/");
const tilte:string="MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday";
    await expect(page).toHaveTitle(tilte);
    console.log(await page.title());
    

  await  page.locator("span[class=commonModal__close]").click();
  await page.locator("xpath =//p[@data-cy='departureDate']").click();

  const monthyear: string = "October 2025";
  const monthLocator: string = `xpath=(//div[@class='DayPicker-Month'])[1]/div//div[text()='${monthyear}']`;
  const date:string= "9";
  const dateSelect:string =`(//div[@class='dateInnerCell']/p[text()='${date}'])[1]`;
  await page.waitForLoadState("load");
  await page.locator("xpath=//span[@data-cy='selectReturnDate']").waitFor({state:"visible"});
while(true){
  if(!await page.locator(monthLocator).isVisible())
  {
    await page.getByLabel("Next Month").click();
  }
  else{
  await page.locator(dateSelect).click();
  break;}

}
page.pause();


  

   


});