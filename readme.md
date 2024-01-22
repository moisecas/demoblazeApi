

```markdown
# Pruebas End-to-End con Cypress en DemoBlaze.com

Este repositorio contiene pruebas automatizadas de extremo a extremo utilizando Cypress en el sitio web DemoBlaze.com.

## Configuración del Proyecto

Antes de ejecutar las pruebas, asegúrate de tener Cypress instalado en tu entorno de desarrollo. Puedes instalarlo siguiendo [estas instrucciones](https://docs.cypress.io/guides/getting-started/installing-cypress.html).

## Ejecutar las Pruebas

Para ejecutar las pruebas, abre una terminal en la raíz del proyecto y ejecuta el siguiente comando:

```bash
npx cypress open
```

Esto abrirá la interfaz de Cypress donde podrás seleccionar y ejecutar las pruebas de extremo a extremo.

## Pruebas Disponibles

### Crear Usuario

La prueba "Crear Usuario" realiza un escenario de registro en el sitio web DemoBlaze.com. Se completa el formulario de registro con un nombre de usuario y una contraseña válidos y luego se hace clic en el botón de registro.

### Intentar Crear un Usuario Existente

La prueba "Intentar Crear un Usuario Existente" simula el intento de registro con un nombre de usuario que ya existe en la base de datos. Se espera que aparezca una ventana emergente con el mensaje "Please fill out Username and Password."

### Usuario y Contraseña Correctos en el Inicio de Sesión

La prueba "Usuario y Contraseña Correctos en el Inicio de Sesión" verifica si es posible iniciar sesión con un usuario y contraseña válidos. Se completa el formulario de inicio de sesión con las credenciales correctas y se verifica que el usuario esté conectado correctamente.

### Usuario Incorrecto en el Inicio de Sesión

La prueba "Usuario Incorrecto en el Inicio de Sesión" simula un intento de inicio de sesión con un nombre de usuario incorrecto. Se espera que aparezca una ventana emergente con el mensaje "Sign up successful."

### Contraseña Incorrecta en el Inicio de Sesión

La prueba "Contraseña Incorrecta en el Inicio de Sesión" simula un intento de inicio de sesión con una contraseña incorrecta. Se espera que aparezca una ventana emergente con el mensaje "Sign up successful."



