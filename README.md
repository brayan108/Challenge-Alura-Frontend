# Challenge-Alura-Frontend



## Descripción
Este proyecto fue propuesto como un reto por Alura Latam. Es una aplicación para visualizar, agregar y eliminar productos de un inventario. Los productos incluyen un nombre, precio e imagen.



## Como Usar
Tenemos una sección para visualizar los productos y otra para agregarlos, en esta ultima sección, disponemos de 3 campos de texto, en el cual podemos introducir el nombre, el precio y la imagen del producto, cuando completes esta información, debes darle al botón 
de enviar, esto agregara un nuevo producto al inventario, si quieres limpiar los campos puedes darle al boton de limpiar. ahora, si quieres eliminar un producto, cada uno de estos tiene un botón con simbolo de bote de basura, identifica el producto que quieres
eliminar y dale al boton correspondiente, despues debes confirmar que si quieres eliminarlo, y se eliminarà automaticamente.


## Instalación
Para instalar y usar este proyecto, puedes seguir estos pasos:

 1. Clona el repositorio:
   ```
   git clone https://github.com/brayan108/Challenge-Alura-Frontend.git
   ```
2. Abre el proyecto en Visual Studio Code.
3. Si aún no tienes instalada la extensión Live Server, ve a la pestaña de extensiones en VS Code y busca "Live Server". Instálala y luego abre el proyecto con un servidor local para ejecutarlo.
4. Abre el terminal en Visual Studio Code y ejecuta el siguiente comando para iniciar JSON Server, que simula la base de datos de los productos:
   ```
   npx json-server --watch db.json --port 3001
   ```
   Nota: asegurate de que tienes instalado Node.js para que lo anterior funcione, si no lo tienes, puedes descargarlo aquí https://nodejs.org/en
   
De esta manera, ya puedes usar la aplicación.
