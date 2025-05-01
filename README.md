# QA-SAUCE-DEMO

## Proyecto de Automatización QA FrontEnd con Playwright y Cucumber

Este proyecto implementa una suite de pruebas automáticas para la aplicación web [Sauce Demo](https://www.saucedemo.com/), utilizando Playwright con Cucumber, y aplicando el patrón de diseño Page Object Model (POM).

---

##  Objetivo

Crear un conjunto de pruebas que validen la experiencia de compra de un usuario en Sauce Demo, desde el inicio de sesión hasta la confirmación del pedido.

---

## Criterios de Aceptación Cubiertos

- El usuario puede iniciar sesión con credenciales válidas.
- El usuario no puede iniciar sesión con credenciales inválidas.
- El usuario puede agregar un producto al carrito.
- El usuario puede ver los productos en el carrito.
- El usuario puede completar la compra.

---

##  Estructura del Proyecto

QA-SAUCE-DEMO/ 
├── features/ # Archivos .feature en Gherkin 
├── pages/ # Page Object Model 
├── steps/ # Step Definitions de Cucumber 
├── reports/ # Reportes HTML generados 
├── screenshots/ # Capturas automáticas si falla un escenario 
├── cucumber.mjs # Configuración de Cucumber 
├── tsconfig.json # Configuración de TypeScript 
├── playwright.config.ts # Configuración de Playwright 
├── README.md

##  Instalación y Ejecución

1. Clona el repositorio:

<<<<<<< HEAD
```bash
=======
>>>>>>> 456e3c4 (Update rbs)
git clone https://github.com/KeveloperCod/QA-SAUCE-DEMO.git
cd QA-SAUCE-DEMO

Instala las dependencias:
bash
Copiar
Editar
npm install

Ejecutar todos los tests:

bash
Copiar
Editar
npm run test
Ejecutar solo un grupo de escenarios por etiquetas:

bash
Copiar
Editar
npm run test -- --tags @validLogin
npm run test -- --tags @invalidLogin
npm run test -- --tags @addCart
npm run test -- --tags @viewAddCart
npm run test -- --tags @checkoutPage



## Grabación de Videos
Todos los escenarios automatizados generan un video de ejecución en tiempo real.
Los archivos .webm se guardan automáticamente en la carpeta:

bash
Copiar
Editar
/videos/

## Reporte HTML
Los reportes de ejecución se generan en:

bash
Copiar
Editar
/reports/report.html
Puedes abrir este archivo en tu navegador para visualizar los resultados.
