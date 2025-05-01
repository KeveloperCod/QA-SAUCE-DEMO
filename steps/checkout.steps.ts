import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from './world';

import { CheckoutPage } from '../pages/CheckoutPage';
let checkoutPage: CheckoutPage;


//------------------ Step para v completar el proceso de compra hasta la confirmación -------------------//


When('completa el proceso de compra con datos válidos', async function (this: CustomWorld) {
    checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.completeCheckout();
  });
  
  Then('debería ver el mensaje de confirmación de la orden', async function (this: CustomWorld) {
    await checkoutPage.verifyConfirmation();
  });
  
  