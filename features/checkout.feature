 Feature: Proceso de compra
 
 @checkoutPage
 Scenario: El usuario completa una compra
	Given el usuario está en la página de inicio de sesión
	When ingresa el usuario "standard_user" y contraseña "secret_sauce"
	And agrega el producto "Sauce Labs Backpack" al carrito
	And entra al carrito de compras
	And completa el proceso de compra con datos válidos
	Then debería ver el mensaje de confirmación de la orden