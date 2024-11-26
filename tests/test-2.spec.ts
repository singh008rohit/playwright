import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.getByRole('button', { name: 'Alert' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
});