# 🚜 API de Gestión de Granjas (Farm Management API)

Este repositorio contiene el diseño y documentación de una API RESTful para la administración de granjas y sus animales.

El proyecto demuestra la implementación de una relación de base de datos Uno a Muchos (1:N), donde una Granja puede tener múltiples Animales asociados, pero un Animal pertenece a una sola Granja.

## 📋 Descripción del Proyecto

El objetivo principal es diseñar los endpoints necesarios para un sistema CRUD (Crear, Leer, Actualizar, Eliminar) completo.

### Estructura de Datos

* 🏠 **Granjas (Farms)**: La entidad principal. Contiene información como el nombre y la ubicación.
* 🐄 **Animales (Animals)**: La entidad dependiente. Cada animal está vinculado a una granja mediante un `farmId`.

## 🛠 Herramientas Utilizadas

* **Bruno**: Para el diseño y prueba de las peticiones HTTP.
* **OpenAPI (Swagger)**: Para la documentación estandarizada de la API en formato YAML.

## 📂 Contenido del Repositorio

### 1. Colección de Bruno

En la raíz del proyecto encontrarás los archivos `.bru` listos para ser importados.

**Endpoints de Granjas:**

* `GET /farms` - Obtener todas las granjas.
* `GET /farms/{id}` - Ver detalle de una granja.
* `POST /farms` - Registrar una nueva granja.
* `PUT /farms/{id}` - Actualizar datos de una granja.
* `DELETE /farms/{id}` - Eliminar una granja.

**Endpoints de Animales:**

* `GET /animals` - Obtener censo de animales.
* `GET /animals/{id}` - Buscar animal por ID.
* `GET /farms/{id}/animals` - (Relación) Obtener todos los animales de una granja específica.
* `POST /animals` - Registrar nacimiento/compra de animal.
* `PUT /animals/{id}` - Actualizar datos del animal.
* `DELETE /animals/{id}` - Dar de baja un animal.

### 2. Documentación Swagger

El archivo `farm-api.yaml` contiene la especificación técnica completa bajo el estándar OpenAPI 3.0.

## 🚀 Cómo utilizar este proyecto

1. **Instalar Bruno**: Descarga la aplicación desde su sitio oficial.
2. **Abrir la Colección**:
   * Abre Bruno.
   * Selecciona "Open Collection".
   * Elige la carpeta raíz de este proyecto (`Proyecto-Granja`).
3. **Explorar las Peticiones**: Verás las carpetas y archivos organizados en el panel izquierdo.

> ⚠️ **Nota Importante**: La URL base configurada (`https://api.granja.com`) es un mock (ficticia) utilizada con fines de diseño. Al ejecutar las peticiones en Bruno, es esperado recibir errores de conexión, ya que el servidor backend real no ha sido desplegado. El propósito de este proyecto es validar la estructura de las peticiones (Body, Headers, Métodos).

## 📝 Ejemplo de Datos (JSON)

**Crear una Granja (POST):**

```json
{
  "name": "Granja La Pradera",
  "location": "Valle Sagrado"
}
```

**Registrar un Animal (POST):**

```json
{
  "name": "Betsy",
  "species": "Vaca",
  "farmId": 1
}
```

---

Proyecto realizado con fines educativos para demostrar arquitectura de APIs REST.