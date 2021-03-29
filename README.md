# api-crud-nodejs
CRUD API REST - NODE.JS

Crud sistema de bodegas conectado a base de datos MYSQL.
El proyecto se realizó con node.js, express como framework y para templates handlebars.

# Prerequisitos
- Node.js
- MYSQL

# Instalar la aplicación
Vamos a instalar la aplicación en un entorno local, para esto se deben tener conocimientos basicos de la consola.

## Instalar el proyecto
Se debe descargar o clonar el proyecto en una carpeta local.  
Despues de descargar y guardar el proyecto en su carpeta de preferencia, se debe editar el archivo "keys.js" para configurar la base de datos en la que se va a guardar la información.

Si no se tiene una base de datos creada en MYSQL, se puede crear con el codigo contenido en la carpeta "database", archivo "db.sql" y ejecutandolo en MYSQL.

## Instalar dependencias necesarias
En el archivo package.json están las dependencias necesarias para el funcionamiento de la aplicación. Por medio de la consola ubicado en la carpeta donde se guardó la aplicación,
se ejecuta el siguiente comanda

```
npm install package.json
```


## Iniciar la aplicación
La aplicación se inicia desde la consola indicando el siguiente comando.

```
npm run project
```

Con esto se iniciará el servidor en "localhost" puerto 4000. Desde de el navegador se puede empezar a operar el CRUD. Por medio del navegar se ingresa a la siguiente dirección:
```
http://localhost:4000/
```
La cual conduce a la página de inicio de la aplicación. Por medio del menú de navegación, en el link "Bodegas" se puede acceder al sistema de administración de bodegas (CRUD).
Desde este se gestiona las bodegas almacenadas en la base de datos anteriormente configurada.
