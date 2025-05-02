import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './world';
import { LoginPage } from '../pages/LoginPage';


let loginPage: LoginPage;


//------------------ Step Positivo para el logeo -------------------//
Given('el usuario está en la página de inicio de sesión', 
  async function (this: CustomWorld) {
    loginPage = new LoginPage(this.page);
    await loginPage.goto();
    console.log('URL actual:', this.page.url());
    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
  });

  When('ingresa el usuario {string} y contraseña {string}', async function (this: CustomWorld, username: string, password: string) {
    await loginPage.login(username, password);
    if (username === 'standard_user') {
    }
  });
  

Then('debería ver la página de productos', async function (this: CustomWorld) {
  await this.page.waitForURL('**/inventory.html', { timeout: 15000 });
  console.log('Login exitoso - URL actual:', this.page.url());
});



//------------------ Step Negativo para el logeo -------------------//

Then('debería ver un mensaje de error', 
  async function (this: CustomWorld) {
    await expect(loginPage.errorMessage).toBeVisible({ timeout: 5000 });
    await this.page.waitForTimeout(5000);
  });



