import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async verifyCartItemCount(expectedCount: number) {
    await expect(this.cartBadge).toHaveText(expectedCount.toString());
  }
}
