import {test} from '@playwright/test'


test('login to application',async({page})=>{


   await page.goto("https://web.whatsapp.com/");

   await page.context().tracing.start({ screenshots: true, snapshots: true });
await page.context().tracing.stop({ path: 'trace.zip' });





});