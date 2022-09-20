# Proyecto REACT.JS CoderHouse, comisión 41080.

## Pasos para ejecutar el proyecto

✅ Clonar este repositorio.

✅ Contar con NodeJs en tu equipo.

✅ Intalar las dependencias necesaria para el funcionamiento de la App con el siguiente comando 

### `npm install`

✅ Cargar las dependencias o componentes necesarios para correr el proyecto.

✅ Compilar el proyecto en servidor 3000, usando el comando:

###`npm start`

## TecnoShop (E-COMMERCE)

Es una tienda o E-COMMERCE enfocado en la venta de accesorios y todo tipo de productos de tecnologia relacionados con mejorar la experiencia en el uso de computadoras, cualquiera sea el uso que se le de.

Nuestro objetivo es mostrar un espacio atractivo y de confianza donde comprar este tipo de productos no sea un problema.

## ¿Qué puedes hacer en nuestra appa?

➡ Filtrado de productos por categoría.

➡ visualizar el detalle del producto.

➡ Symar o restar productos al carro de compra.

➡ Proceso de compra completo.

➡ Carrito de compra con toda la información de precios, cantidades y total.

➡ agregar o quitar articulos al carrito de compra.

➡ Solicitud de datos para terminar o procesar la compra.

➡ al final de la compra, mediante un alert obtenemos el código de la orden de compra.

## Librerias adicionales

React-router-dom Sweet Alert 2

# Funcionamiento de la App
Las categorías de los productos están linkeadas en el navbar para realizar el filtrado de los mismos según su categoría usando las rutas "/category/:categoryId".

En el componente ItemListContainer están guardados las cards de los productos, creadas de forma dinámica atreves de los componentes ItemList e Item, en estas nos vamos a encontrar con el botón de "Más Info", el cual nos va a dirigir hacia la ruta "/detail/:productId" donde están los detalles del producto seleccionado, y el mismo cuenta con un componente llamado Counter, el cual se va a ocupar de dar la opción interactiva al usuario para sumar la cantidad que desee de producto al carrito de compra, mediante los botones de "-", "+" y "Agregar al Carrito". Una vez agregados los productos el contador va a ser reemplazado por un botón "ir al Carrito", el cuál nos redirecciona al componente CartContainer, donde vamos a encontrar unas versiones simplificadas de las cards de los productos cargados. En este componente nos encontramos con los precios por estilos y el total del carrito, también con las opciones de eliminar el estilo que no se vaya a comprar o eliminar todo el carrito, dejándolo vacío. También se puede avanzar con la compra, lo cual nos lleva al componente Form, el que se va a ocupar de recibir la información del comprador, que, al generar la orden, se le imprime en un alert el código de la misma y se lo redirecciona al home.

## GIF DEMOSTRATION
![rec-screen](https://user-images.githubusercontent.com/101152132/188541452-30e870ca-bd83-4ca7-b98f-9123041e7ced.gif)

