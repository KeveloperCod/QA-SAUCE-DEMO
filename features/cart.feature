Feature: Gestión del carrito de compras

@addCart
  Scenario: Agregar un producto al carrito
	Given el usuario está en la página de inicio de sesión
	When ingresa el usuario "standard_user" y contraseña "secret_sauce"
	And agrega el producto "Sauce Labs Backpack" al carrito
	Then debería ver el carrito con 1 producto

@viewAddCart
  Scenario: Ver los productos agregados en el carrito
	Given el usuario está en la página de inicio de sesión
	When ingresa el usuario "standard_user" y contraseña "secret_sauce"
	And agrega el producto "Sauce Labs Backpack" al carrito
	And entra al carrito de compras
	Then debería ver el producto "Sauce Labs Backpack" listado en el carrito