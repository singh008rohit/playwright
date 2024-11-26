import { test,expect,Page,Locator,Browser, chromium,Dialog } from "@playwright/test";

test('handel alert',async()=>{

    const browser:Browser = await chromium.launch({headless:false});
    const page:Page =await browser.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    test.setTimeout(45000);
    const pageAlert:Locator =page.getByRole('button', { name: 'Alert' });
    test.setTimeout(45000);
//pageAlert.check();
   // pageAlert.click();
   await page.getByRole('button', { name: 'Alert' }).click();
    test.setTimeout(45000);
    page.on('dialog', async (dialog: Dialog) => {
        console.log(`Dialog message: ${dialog.message()}`); // Print the message of the alert
        await dialog.accept(); // Accept the alert dialog
      });
    
      // Trigger an alert on the page (example)
      await page.evaluate(() => alert('This is a JavaScript alert!'));
    
      //await browser.close();


});