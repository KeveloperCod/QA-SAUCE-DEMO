import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from './world';

import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
let cartPage: CartPage;
let inventoryPage: InventoryPage;





//------------------ Step para agregar un producto al carrito -------------------//

  When('agrega el producto {string} al carrito', async function (this: CustomWorld, product: string) {
    inventoryPage = new InventoryPage(this.page);
    await inventoryPage.addProductToCart();
  });
  
  Then('debería ver el carrito con {int} producto', async function (this: CustomWorld, count: number) {
    await inventoryPage.verifyCartItemCount(count);
  });



//------------------ Step para ver los productos agregador en el carrito  -------------------//


When('entra al carrito de compras', async function (this: CustomWorld) {
  cartPage = new CartPage(this.page);
  await cartPage.goToCart();
});

Then('debería ver el producto {string} listado en el carrito', async function (this: CustomWorld, productName: string) {
  await cartPage.verifyProductInCart(productName);
});
