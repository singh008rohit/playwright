import { test, expect, Browser, Page, Locator, chromium } from '@playwright/test';

test('open ',  async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page:Page =await  browser.newPage();
  await page.goto('https://www.icc-cricket.com/tournaments/womens-t20-worldcup');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByLabel('Login').click();
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('rogiy');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('3445666');
  await page.getByLabel('Keep me logged in').check();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Forgot your password?' }).click();
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('gdhhrrr');
  await page.getByLabel('Continue').click();
  await page.getByText('Please enter a valid email address.').click();
  await page.getByText('One or more fields are filled').click();
  await page.getByLabel('Send verification code').click();
  await page.getByLabel('Continue').click();
  await page.getByLabel('Cancel').click();
  await page.goto('https://www.icc-cricket.com/tournaments/womens-t20-worldcup');
});