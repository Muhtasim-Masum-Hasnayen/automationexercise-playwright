import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.loginLink = page.getByRole('link', {
      name: /Signup\s*\/\s*Login/i,
    });

    // Login form
    this.email = page.locator('input[data-qa="login-email"]');
    this.password = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.getByRole('button', { name: /^Login$/ });

    // Logged-in user indicator
    this.loggedInUser = page.locator('a').filter({
      hasText: /Logged in as/i,
    });
  }

  async open() {
    await this.page.goto('/', {
      waitUntil: 'domcontentloaded',
    });

    await expect(this.loginLink).toBeVisible();
    await this.loginLink.click();

    await expect(this.email).toBeVisible();
    await expect(this.password).toBeVisible();
  }

  async login(email, password) {
    if (!email || !password) {
      throw new Error(
        'Email and password are required. Set AE_EMAIL and AE_PASSWORD environment variables.'
      );
    }

    await this.email.fill(email);
    await this.password.fill(password);

    await expect(this.email).toHaveValue(email);
    await expect(this.password).toHaveValue(password);

    await this.loginButton.click();
  }

  async expectLoggedIn() {
    // Wait for the logged-in state to appear after successful login.
    await expect(this.loggedInUser).toBeVisible({
      timeout: 10000,
    });

    // Verify that the text actually contains "Logged in as".
    await expect(this.loggedInUser).toContainText(/Logged in as/i);
  }
}