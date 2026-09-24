import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('registered user can log in successfully', async ({ page }) => {
  const email = process.env.AE_EMAIL;
  const password = process.env.AE_PASSWORD;

  if (!email || !password) {
    throw new Error(
      'Missing AE_EMAIL or AE_PASSWORD environment variables.'
    );
  }

  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(email, password);
  await loginPage.expectLoggedIn();
});