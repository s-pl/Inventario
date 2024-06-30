# Inventario

Aplicación web de Inventario de productos con base de datos en Firebase
## Descripción 

Este proyecto implementa un sistema básico de gestión de inventario utilizando Node.js, Express y Firebase Realtime Database como backend. A continuación se detalla la estructura y funcionalidad principal del código:
Estructura de Archivos

El proyecto está estructurado de la siguiente manera:

    index.js: Archivo principal que configura el servidor Express y define las rutas principales del API.
    /src/routes: Directorio que contiene los archivos de rutas para las operaciones CRUD.
    /src/public: Directorio estático para archivos públicos como HTML, CSS y JavaScript.
    /firebase.js: Archivo que contiene la configuración de Firebase y las funciones para interactuar con la base de datos en tiempo real.

### Dependencias

    Express: Utilizado para el enrutamiento y manejo de solicitudes HTTP.
    Body-parser: Middleware para analizar cuerpos de solicitud en diferentes formatos.
    Firebase Admin SDK: Para la integración con Firebase Realtime Database.

## Configuración y Uso

### Configuración de Firebase:
Se utiliza el SDK de Firebase Admin para configurar las credenciales y la URL de la base de datos en firebase.js.
Para poder obtener las credenciales visita: 
- https://firebase.google.com/docs/admin/setup?hl=es-419#windows
- Cuando las obtengas, deberás guardar el JSON en ``./credentials`` y linkearlo desde ``./firebase.js``
```json
{
  "type": "",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": "",
  "client_x509_cert_url":"",
  "universe_domain":
}
```

 ### Endpoints
        /addProduct: Permite agregar un nuevo producto al inventario.
        /deleteProduct: Elimina un producto del inventario por su ID.
        /update: Actualiza la información de un producto existente en el inventario.
        /allProducts: Retorna todos los productos del inventario.
        /getProduct: Obtiene detalles específicos de un producto por su ID.



## Ejecución

### Para ejecutar el servidor localmente:

    Asegúrate de tener Node.js y npm instalados.
    Instala las dependencias ejecutando npm install.
    Configura tus credenciales de Firebase en firebase.js.
    Inicia el servidor con node index.js.
    Accede a la aplicación desde http://localhost:3000/.


##Pruébalo
[](https://bmgyawfdsd.eu-central-1.awsapprunner.com/)
