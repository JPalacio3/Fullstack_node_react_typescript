# Fullstack Node.js y React - Gestión de Productos

Este es un proyecto Fullstack que implementa un sistema CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de productos. La aplicación cuenta con un backend desarrollado en Node.js con Express y TypeScript, y un frontend moderno construido con React, Vite y Tailwind CSS.

## Vista Previa de la Interfaz

<!-- Aquí puedes agregar una captura de pantalla de la aplicación -->

![Vista Previa de la Interfaz](/client/public/admin-image.png)

## Despliegue

Puedes ver la aplicación en funcionamiento en el siguiente enlace:

[Ver la aplicación en vivo](https://administradorproductos-6bhewo6ny-jpalacios-projects-3da551c3.vercel.app/)

## Funcionalidades Principales

- **Listado de Productos:** Visualiza todos los productos en una tabla.
- **Creación de Productos:** Añade nuevos productos a través de un formulario.
- **Edición de Productos:** Modifica la información de productos existentes.
- **Eliminación de Productos:** Borra productos de la base de datos con confirmación.
- **Cambio de Disponibilidad:** Activa o desactiva la disponibilidad de un producto con un solo clic y previa confirmación.
- **Validaciones de Formulario:** Feedback en tiempo real sobre los datos ingresados en los formularios.

## Infraestructura y Tecnologías Utilizadas

### Backend

- **Entorno de Ejecución:** Node.js
- **Framework:** Express.js
- **Lenguaje:** TypeScript
- **ORM:** Prisma para la gestión de la base de datos.
- **Base de Datos:** Preparado para PostgreSQL (configurable en `prisma/schema.prisma`).
- **Documentación de API:** Swagger para visualizar y probar los endpoints.
- **Testing:** Jest para pruebas unitarias y de integración.

### Frontend

- **Librería:** React
- **Lenguaje:** TypeScript
- **Build Tool:** Vite
- **Enrutamiento:** React Router
- **Estilos:** Tailwind CSS para un diseño moderno y responsivo.
- **Gestión de Estado:** React Hooks y Loaders/Actions de React Router.

## Cómo Empezar

Sigue estos pasos para levantar el proyecto en tu entorno local.

### Prerrequisitos

- Node.js (v18 o superior)
- npm / pnpm / yarn
- Una instancia de base de datos PostgreSQL.

## Documentación de la API

Puedes acceder a la documentación de la API en la siguiente ruta:

[Documentación de la API](https://fullstack-node-react-typescript-backend.onrender.com/api-docs/)

### Configuración del Backend

1.  Navega al directorio del servidor:
    ```bash
    cd server
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Crea un archivo `.env` en la raíz del directorio `server` y configura la variable de entorno para la base de datos:
    ```
    DATABASE_URL="postgresql://USUARIO:PASSWORD@HOST:PUERTO/NOMBRE_DB"
    ```
4.  Ejecuta las migraciones de Prisma para crear las tablas en tu base de datos:
    ```bash
    npx prisma migrate dev
    ```
5.  Genera el cliente de Prisma:
    ```bash
    npx prisma generate
    ```
6.  Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```
    El servidor estará corriendo en `http://localhost:4000`.

### Configuración del Frontend

1.  Abre una nueva terminal y navega al directorio del cliente:
    ```bash
    cd client
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Inicia el cliente de desarrollo:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.
