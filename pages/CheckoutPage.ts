import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async completeCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
    await this.page.locator('[data-test="firstName"]').fill('Juan');
    await this.page.locator('[data-test="lastName"]').fill('Perez');
    await this.page.locator('[data-test="postalCode"]').fill('12345');
    await this.page.locator('[data-test="continue"]').click();
    await this.page.locator('[data-test="finish"]').click();
  }

  async verifyConfirmation() {
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
  }
}
