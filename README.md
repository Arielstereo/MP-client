# Clon de MercadoPago

![Clon de MercadoPago](./public/mp.png)

Este es un proyecto MERN (MongoDB, Express, React, Node.js) que simula una versión simplificada de MercadoPago. Permite a los usuarios registrarse, iniciar sesión, realizar transferencias de dinero utilizando alias y agregar dinero a sus propias cuentas.

## Características del Proyecto

- **Registro y Inicio de Sesión de Usuario**: Los usuarios pueden registrarse con su correo electrónico y contraseña, y luego iniciar sesión en sus cuentas.

- **Transferencia de Dinero**: Los usuarios pueden realizar transferencias de dinero entre cuentas utilizando un alias en lugar de números de cuenta bancaria. Esta característica permite una experiencia de usuario más sencilla.

- **Recargar Fondos**: Los usuarios pueden ingresar dinero en sus cuentas para luego utilizarlo en transferencias.

## Tecnologías Utilizadas

- **MERN Stack**:
  - MongoDB para la base de datos.
  - Express.js para el servidor.
  - React.js para el frontend.
  - Node.js para el backend.

- **Tailwind CSS**: Se utilizó Tailwind CSS para diseñar la interfaz de usuario, lo que permite una apariencia moderna y altamente personalizable.

- **Zustand**: Se empleó Zustand para administrar los estados globales de la aplicación de manera eficiente.

- **Deploy**:
  - El frontend se encuentra desplegado en [Vercel](https://mp-client-arielstereo.vercel.app/)

## Clonar y Ejecutar el Proyecto

Para clonar el proyecto:
- **Server**:
 ```bash 
 https://github.com/Arielstereo/MP-server 
 ```
 - **Client**:
 ```bash 
 https://github.com/Arielstereo/MP-client 
 ```

 Recuerda instalar las dependencias tanto en el server como en el cliente.

 ```bash
  cd mp-server
  npm install
  npm start
 ```
 ```bash
  cd mp-client
  npm install
  npm start
 ```

 Configura las variables de entorno necesarias para utilizar el server:
 
 ```bash
  PORT= 3000 (por ejemplo)
  MONGODB_URI = "mongodb+srv://usuario:contraseña@mycluster.r3tzean.mongodb.net/nombre"
  TOKEN_SECRET = "tu_contraseña"
 ```