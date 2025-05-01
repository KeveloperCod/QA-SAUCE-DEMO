import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItem = page.locator('.cart_item');
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async verifyProductInCart(productName: string) {
    await expect(this.cartItem.locator('.inventory_item_name')).toHaveText(productName);
  }
}
