import {test ,expect,Browser ,Page,firefox,webkit,chromium} from '@playwright/test'
     


test(' select dynamic dropdown',async()=>{

    const browser:Browser= await chromium.launch()

      const context=   await browser.newContext();

     const page:Page= await context.newPage();

    await page.goto("https://www.orangehrm.com");
     await expect(page).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ");

     await page.getByText("Resources").first().click();
     await page.locator("xpath= //div[@class='secondary secondary-menu-2']//li[4]").click();
     //await page.getByRole('link', { name: 'Product Overview' }).hover();
    await page.locator("xpath = //a[text()='Advanced Overview (Long)']").first().click();

     


});