import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  private page: Page;
  
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async goto() {
    try {
      const response = await this.page.goto('https://www.saucedemo.com/', {
        waitUntil: 'networkidle',
        timeout: 60000
      });
      
      if (!response?.ok()) {
        throw new Error(`HTTP ${response?.status()} - ${response?.statusText()}`);
      }
      
      await expect(this.loginButton).toBeVisible({ timeout: 20000 });
    } catch (error) {
      console.error('Page navigation failed:', error);
      throw error;
    }
  }

  async login(username: string, password: string) {
    try {
      await this.usernameInput.fill(username, { timeout: 15000 });
      await this.passwordInput.fill(password, { timeout: 15000 });
      
      const navigationPromise = this.page.waitForNavigation({ 
        timeout: 30000,
        waitUntil: 'networkidle'
      });
      
      await this.loginButton.click({ timeout: 10000 });
      await navigationPromise;
      
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }
}