Entrega final Francisco Conte coderhouse.

Generador de contraseñas: Este consta de dos flujos.
El primer flujo consta de generar una contraseña a partir de palabras ingresadas
por el usuario en un form. Esas palabras son modificadas para generar una "contraseña segura"

El segundo flujo es similar al principal pero con la diferencia que el usuario puede clickear
en un boton para generar esas palabras aleatoriamente y no ingresar nada por el form.
Estas palabras aleatorias que te da el simulador las toma de la "base de datos" que es el archivo
json. Donde contiene diferentes tipos de palabras para poder generar la contraseña.

La salida se genera en otra seccion del DOM donde se muestras las contraseñas generadas por el usuario
a partir de los dos flujos mencionados anteriormente.

Estructura:
- Carpeta JS donde se guardan 4 archivos js:
DOMevents.js -> Todo lo relacionado a modificaciones en el DOM a través de eventos
fetch.js -> Archivo que se encarga de realizar el fetch al JSON. Se incluye un try & catch para filtrar errores.
script.js -> Funcionalidades generales para poder generar la contraseña aleatoria para el usuario.
toast.js -> Se incluye los scripts para generar los toast/alertas para el usuario. Librería: Toastify

-database.json -> Se guardan diferentes palabras en un json para utilizarlas para generar palabras aleatorias
si es que el usuario lo requiere.

-index.html -> Estructura html

-style.css -> Estilos básicos para el generador de contraseñas. Nada complejo, no soy bueno en CSS.