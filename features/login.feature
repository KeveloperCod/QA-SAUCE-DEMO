Feature: Login en Sauce Demo

@validLogin
Scenario: Login exitoso con usuario válido
  Given el usuario está en la página de inicio de sesión
  When ingresa el usuario "standard_user" y contraseña "secret_sauce"
  Then debería ver la página de productos

@invalidLogin
Scenario: Usuario bloqueado al intentar iniciar sesión
  Given el usuario está en la página de inicio de sesión
  When ingresa el usuario "locked_out_user" y contraseña "secret_sauce"
  Then debería ver un mensaje de error
