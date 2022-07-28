

# Challenge CopyWrite



## Objetivos del Challenge
 ## API
- construir Un API REST, a la cual se le envía un texto y responde con el mismo texto invertido.
- Usando NodeJs +ExpressJs se debe crear API de un solo endpoint al cual se le envía el texto de la siguiente  forma: GET /iecho?text=test
- crear los tests que validan el API usando Mocha + Chai + Supertest. Los tests deben poder correrse usando "npm test".

## FRONT
- Una App cliente en React que permita enviar textos a la API del punto anterior y muestre las respuestas del API desde la ultima a la primera.
- Usando React + Bootstrap/Material UI se debe crear una pantalla donde se muestren los textos invertidos provenientes de la api

## Comenzando

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas
 2. Clonar el repositorio en sus computadoras para comenzar a trabajar
 


## Archivos

El archivo cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.
## backend
Para iniciar el servidor del backend tiene que dirigirse a la carpeta `api` hacer npm install para instalar todas las dependencias y luedo hacer npm start.
Dentro de la carpeta `api` se encuentra el archivo src donde están toda las funcionalidades de la api modularizada en las siguientes carpetas y archivos :
- routes : Se encuentra la carpeta controllers y el endpoint provisto para recibir y enviar la información y el archivo app.js donde se encuentran todos los middlewares.
- controllers : se encuentra el código para invertir los textos que se envían del front, en este caso una función.
- tests : en esta carpeta se encuentran los test correspondientes utilizando mocha y supertest.
- archivo Index : en este archivo se encuentra la conexión con el servidor

## frontend
Para iniciar React tiene que dirigirse a la carpeta `client` hacer npm install para instalar todas las dependencias y luego hacer npm start.
Dentro de la carpeta `client` se encuentra los siguientes archivos y carpetas:
- Public : todo lo relacionado con el html y sus configuraciones 
- src : esta es la carpeta principal donde se aloja todo el codigo de React
- actions : aquí están las acciones de redux por ejemplo la acción para enviar el texto a la api mediante axios
- reducer : se encuentra la función reducer y el estado inicial 
- store : en esta carpeta está la configuración de redux
- App.js : se encuentra toda la vista de la página , el navbar y el cuadro donde están los textos invertidos utilizando Material UI
- NavBar : acá se configura el input con el boton de enviar utilizando bootstrap

El contenido de `client` fue creado usando: Create React App.

#### Testing
- Se realizó testing tanto del backend como del frontend