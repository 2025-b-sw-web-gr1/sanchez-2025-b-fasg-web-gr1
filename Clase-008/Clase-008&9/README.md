# Colección de Pruebas API - JSONPlaceholder con Bruno

Este proyecto contiene una colección completa de peticiones HTTP configuradas para la herramienta Bruno, diseñadas para probar y verificar el funcionamiento de la API pública JSONPlaceholder.

El objetivo principal de este repositorio es servir como práctica de consumo de servicios web RESTful, abarcando los métodos HTTP principales: GET, POST, PUT, PATCH y DELETE.

## 📋 Tabla de Contenidos

1. [Requisitos Previos](#-requisitos-previos)
2. [Instalación y Configuración](#-instalación-y-configuración)
3. [Estructura del Proyecto](#-estructura-del-proyecto)
4. [Cómo Usar la Colección](#-cómo-usar-la-colección)
5. [Recursos Disponibles](#-recursos-disponibles-endpoints)

## 🔧 Requisitos Previos

Para utilizar esta colección necesitas tener instalado el cliente de API Bruno.

- **Descargar Bruno**: <https://www.usebruno.com/downloads>
- **Sistema Operativo**: Compatible con Windows, macOS y Linux.

## 🚀 Instalación y Configuración

Sigue estos pasos para cargar las pruebas en tu entorno local:

1. Descarga este repositorio (o la carpeta `Clase-008` que contiene los archivos `.bru`).
2. Abre la aplicación Bruno.
3. En la pantalla principal, selecciona la opción **"Open Collection"**.
4. Navega hasta la carpeta `Clase-008` y selecciónala.
5. ¡Listo! Verás todas las peticiones organizadas en el panel izquierdo de la aplicación.

## 📂 Estructura del Proyecto

El proyecto está organizado en archivos individuales `.bru`, donde cada uno representa una operación específica sobre un recurso de la API.

### Convención de Nombres

Los archivos siguen el patrón: `verbo-recurso-detalle.bru`

- Ejemplo: `get-all-posts.bru` (Obtener todos los posts)
- Ejemplo: `create-user.bru` (Crear un usuario)

### Secciones Principales

La colección cubre los 6 recursos principales de JSONPlaceholder:

- **Posts**: Gestión de publicaciones (Crear, leer, actualizar, borrar).
- **Comments**: Gestión de comentarios e hilos de conversación.
- **Albums**: Colecciones de fotos.
- **Photos**: Recursos de imágenes asociados a álbumes.
- **Todos**: Lista de tareas por hacer.
- **Users**: Información de usuarios simulados.

## 📖 Cómo Usar la Colección

### 1. Ejecutar una Petición (GET)

Las peticiones tipo GET solo recuperan información y no requieren configuración adicional.

1. Haz clic en una petición (ej. `get-all-posts`).
2. Presiona el botón ➡ **Send Request** ubicado arriba a la derecha.
3. Verifica la respuesta en el panel derecho (pestaña **Response**).

### 2. Enviar Datos (POST, PUT, PATCH)

Las peticiones que envían información ya tienen configurado el cuerpo del mensaje (Body) en formato JSON.

1. Selecciona la petición (ej. `create-post`).
2. (Opcional) Puedes editar los datos en la pestaña **Body** si deseas probar con otros valores.
3. Presiona ➡ **Send Request**.
4. Deberías recibir un código de estado `201 Created` o `200 OK`.

### 3. Verificar Resultados

- **200 OK**: La petición fue exitosa.
- **201 Created**: El recurso se creó correctamente.
- **204 No Content**: El recurso se eliminó correctamente (común en DELETE).
- **404 Not Found**: El recurso no existe (prueba con un ID diferente).

## 🛠 Recursos Disponibles (Endpoints)

A continuación se detallan las operaciones disponibles en esta colección:

| Recurso  | Métodos Implementados         | Descripción                                           |
| -------- | ----------------------------- | ----------------------------------------------------- |
| Posts    | GET, POST, PUT, PATCH, DELETE | Operaciones completas CRUD para artículos de blog.    |
| Comments | GET, POST                     | Lectura de comentarios globales y filtrados por post. |
| Albums   | GET, POST                     | Consulta de álbumes y creación de nuevos registros.   |
| Photos   | GET                           | Consulta de catálogo de fotos.                        |
| Todos    | GET, POST                     | Gestión de lista de tareas pendientes.                |
| Users    | GET                           | Consulta de perfiles de usuario.                      |

## 📝 Notas Adicionales

- **Persistencia de Datos**: Ten en cuenta que JSONPlaceholder es una API falsa. Las peticiones POST, PUT y DELETE simulan que los cambios ocurren, pero no se guardan realmente en el servidor. Si creas un post, obtendrás un ID de éxito, pero si intentas buscarlo después, no existirá. Esto es el comportamiento esperado.

- **Variables de Entorno**: Actualmente las URLs son estáticas. En una versión futura, se podrían implementar "Environments" en Bruno para manejar la URL base (`https://jsonplaceholder.typicode.com`) como una variable.

---

_Proyecto realizado como parte del Taller de Pruebas de API - Clase 008_

