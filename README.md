# api-crud-nodejs
CRUD API REST - NODE.JS
Crud sistema de bodegas conectado a base de datos mysql.
El proyecto se realizó con node.js, express como framework y para templates handlebars.

# Prerequisitos
- Node.js
- MYSQL

## Intalar el proyecto
Se debe descargar o clonar el proyecto en una carpeta local.  
Despues de descargar y guardar el proyecto en su carpeta de preferencia, se debe editar el archivo "keys.js" para configurar la base de datos en la que se va a guardar la información.

Si no se tiene una base de datos creada en MYSQL, se puede crear con el codigo contenido en la carpeta "database" archivo "db.sql" y ejecutandolo en MYSQL.

## Instalar dependencias necesarias
En el archivo package.json están las dependencias necesarias para el funcionamiento de la aplicación.

#Iniciar la aplicación
Se debe iniciar la aplicación desde la consola, ubicado en la carpeta en la cual se guardó la aplicación, con el siguiente comando:

```
npm run project
```

Con esto se iniciará el servidor en "localhost" puerto 4000. Desde de el navegador se puede empezar a operar el CRUD.
En la dirección localhost:4000/bodegas se puede observar todas las bodegas contenidas en la base de datos.
