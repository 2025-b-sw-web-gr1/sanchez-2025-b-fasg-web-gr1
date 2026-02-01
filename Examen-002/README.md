# 🐄 Sistema de Gestión de Granja con Animales

Proyecto de examen desarrollado con **NestJS** y **SQLite** que implementa un sistema completo de gestión de granjas y sus animales con relación **1 a Muchos** (Una granja tiene muchos animales).

---

## 📋 Contenido

- [Descripción](#descripción)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Endpoints](#endpoints)
- [Ejemplos de Uso](#ejemplos-de-uso)
- [Testing con cURL](#testing-con-curl)

---

## 📝 Descripción

Este proyecto implementa un sistema backend completo para gestionar granjas y sus animales. Cada granja puede tener múltiples animales asociados, y cada animal pertenece a una única granja.

### Características principales:

- ✅ CRUD completo para Granjas (Farms)
- ✅ CRUD completo para Animales (Animals)
- ✅ Relación 1 a Muchos correctamente implementada
- ✅ Validaciones de datos con class-validator
- ✅ Manejo de errores apropiado
- ✅ Base de datos SQLite con TypeORM
- ✅ Código limpio y bien comentado

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| NestJS | ^10.0.0 | Framework backend de Node.js |
| TypeORM | ^0.3.17 | ORM para TypeScript/JavaScript |
| SQLite3 | ^5.1.6 | Base de datos ligera |
| class-validator | ^0.14.0 | Validación de datos |
| class-transformer | ^0.5.1 | Transformación de objetos |
| TypeScript | ^5.1.3 | Lenguaje de programación |

---

## 💻 Instalación

Sigue estos pasos para instalar el proyecto:

### 1. Clonar o crear la estructura del proyecto

```bash
# Crear la carpeta del proyecto
mkdir Examen-002
cd Examen-002
```

### 2. Instalar dependencias

```bash
npm install
```

Este comando instalará todas las dependencias definidas en `package.json`:
- `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express`
- `@nestjs/typeorm`, `typeorm`, `sqlite3`
- `class-validator`, `class-transformer`
- Y todas las dependencias de desarrollo

---

## 🚀 Ejecución

### Modo desarrollo (con hot-reload)

```bash
npm run start:dev
```

El servidor se iniciará en `http://localhost:3000`

Verás en consola:
```
========================================
🚀 Servidor iniciado correctamente!
📡 URL: http://localhost:3000
📚 Documentación de endpoints disponible en el README.md
========================================
```

### Modo producción

```bash
npm run build
npm run start:prod
```

---

## 📁 Estructura del Proyecto

```
Examen-002/
├── src/
│   ├── farms/                    # Módulo de Granjas
│   │   ├── dto/
│   │   │   ├── create-farm.dto.ts    # DTO para crear granja
│   │   │   └── update-farm.dto.ts    # DTO para actualizar granja
│   │   ├── entities/
│   │   │   └── farm.entity.ts        # Entidad Farm
│   │   ├── farms.controller.ts       # Controlador de granjas
│   │   ├── farms.service.ts          # Servicio de granjas
│   │   └── farms.module.ts           # Módulo de granjas
│   │
│   ├── animals/                  # Módulo de Animales
│   │   ├── dto/
│   │   │   ├── create-animal.dto.ts  # DTO para crear animal
│   │   │   └── update-animal.dto.ts  # DTO para actualizar animal
│   │   ├── entities/
│   │   │   └── animal.entity.ts      # Entidad Animal
│   │   ├── animals.controller.ts     # Controlador de animales
│   │   ├── animals.service.ts        # Servicio de animales
│   │   └── animals.module.ts         # Módulo de animales
│   │
│   ├── app.module.ts             # Módulo principal
│   └── main.ts                   # Punto de entrada
│
├── .gitignore                    # Archivos ignorados por git
├── nest-cli.json                 # Configuración de NestJS CLI
├── package.json                  # Dependencias y scripts
├── tsconfig.json                 # Configuración de TypeScript
└── README.md                     # Este archivo
```

---

## 🔌 Endpoints

### Granjas (Farms)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/farms` | Obtener todas las granjas |
| GET | `/farms/:id` | Obtener una granja por ID |
| POST | `/farms` | Crear una nueva granja |
| PUT | `/farms/:id` | Actualizar una granja |
| DELETE | `/farms/:id` | Eliminar una granja |
| GET | `/farms/:id/animals` | Obtener animales de una granja |

### Animales (Animals)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/animals` | Obtener todos los animales |
| GET | `/animals/:id` | Obtener un animal por ID |
| POST | `/animals` | Crear un nuevo animal |
| PUT | `/animals/:id` | Actualizar un animal |
| DELETE | `/animals/:id` | Eliminar un animal |
| GET | `/animals/:id/with-farm` | Obtener animal con su granja |
| GET | `/animals/species/:species` | Filtrar por especie |

---

## 📖 Ejemplos de Uso

### 🏠 Granjas (Farms)

#### 1. Crear una nueva granja

**Request:**
```http
POST /farms
Content-Type: application/json

{
  "name": "Granja El Paraíso",
  "location": "Valle de Trujillo"
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "name": "Granja El Paraíso",
  "location": "Valle de Trujillo"
}
```

---

#### 2. Obtener todas las granjas

**Request:**
```http
GET /farms
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Granja El Paraíso",
    "location": "Valle de Trujillo"
  },
  {
    "id": 2,
    "name": "Finca La Esperanza",
    "location": "Costa Norte"
  }
]
```

---

#### 3. Obtener una granja por ID

**Request:**
```http
GET /farms/1
```

**Response (200 OK):**
```json
{
  "id": 1,
  "name": "Granja El Paraíso",
  "location": "Valle de Trujillo"
}
```

---

#### 4. Actualizar una granja

**Request:**
```http
PUT /farms/1
Content-Type: application/json

{
  "name": "Granja El Paraíso Renovada",
  "location": "Valle de Trujillo - Perú"
}
```

**Response (200 OK):**
```json
{
  "id": 1,
  "name": "Granja El Paraíso Renovada",
  "location": "Valle de Trujillo - Perú"
}
```

---

#### 5. Eliminar una granja

**Request:**
```http
DELETE /farms/1
```

**Response (200 OK):**
```json
{
  "message": "Granja con ID 1 eliminada correctamente"
}
```

---

#### 6. Obtener animales de una granja

**Request:**
```http
GET /farms/1/animals
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Lola",
    "species": "vaca",
    "age": 3,
    "farmId": 1
  },
  {
    "id": 2,
    "name": "Pepito",
    "species": "cerdo",
    "age": 1,
    "farmId": 1
  }
]
```

---

### 🐄 Animales (Animals)

#### 1. Crear un nuevo animal

**Request:**
```http
POST /animals
Content-Type: application/json

{
  "name": "Lola",
  "species": "vaca",
  "age": 3,
  "farmId": 1
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "name": "Lola",
  "species": "vaca",
  "age": 3,
  "farmId": 1
}
```

---

#### 2. Obtener todos los animales

**Request:**
```http
GET /animals
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Lola",
    "species": "vaca",
    "age": 3,
    "farmId": 1
  },
  {
    "id": 2,
    "name": "Pepito",
    "species": "cerdo",
    "age": 1,
    "farmId": 1
  },
  {
    "id": 3,
    "name": "Clara",
    "species": "gallina",
    "age": 2,
    "farmId": 2
  }
]
```

---

#### 3. Obtener un animal por ID

**Request:**
```http
GET /animals/1
```

**Response (200 OK):**
```json
{
  "id": 1,
  "name": "Lola",
  "species": "vaca",
  "age": 3,
  "farmId": 1
}
```

---

#### 4. Actualizar un animal

**Request:**
```http
PUT /animals/1
Content-Type: application/json

{
  "name": "Lola Actualizada",
  "age": 4
}
```

**Response (200 OK):**
```json
{
  "id": 1,
  "name": "Lola Actualizada",
  "species": "vaca",
  "age": 4,
  "farmId": 1
}
```

---

#### 5. Eliminar un animal

**Request:**
```http
DELETE /animals/1
```

**Response (200 OK):**
```json
{
  "message": "Animal con ID 1 eliminado correctamente"
}
```

---

#### 6. Obtener animal con información de su granja

**Request:**
```http
GET /animals/1/with-farm
```

**Response (200 OK):**
```json
{
  "id": 1,
  "name": "Lola",
  "species": "vaca",
  "age": 3,
  "farmId": 1,
  "farm": {
    "id": 1,
    "name": "Granja El Paraíso",
    "location": "Valle de Trujillo"
  }
}
```

---

#### 7. Filtrar animales por especie

**Request:**
```http
GET /animals/species/vaca
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Lola",
    "species": "vaca",
    "age": 3,
    "farmId": 1
  }
]
```

---

## 🧪 Testing con cURL

### Datos de ejemplo para testing

#### Crear Granjas:

```bash
# Granja 1 - Granja El Paraíso
curl -X POST http://localhost:3000/farms \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Granja El Paraíso",
    "location": "Valle de Trujillo"
  }'

# Granja 2 - Finca La Esperanza
curl -X POST http://localhost:3000/farms \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Finca La Esperanza",
    "location": "Costa Norte"
  }'
```

#### Crear Animales:

```bash
# Animal 1 - Lola (vaca) en Granja 1
curl -X POST http://localhost:3000/animals \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Lola",
    "species": "vaca",
    "age": 3,
    "farmId": 1
  }'

# Animal 2 - Pepito (cerdo) en Granja 1
curl -X POST http://localhost:3000/animals \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Pepito",
    "species": "cerdo",
    "age": 1,
    "farmId": 1
  }'

# Animal 3 - Clara (gallina) en Granja 2
curl -X POST http://localhost:3000/animals \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Clara",
    "species": "gallina",
    "age": 2,
    "farmId": 2
  }'

# Animal 4 - Benito (oveja) en Granja 2
curl -X POST http://localhost:3000/animals \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Benito",
    "species": "oveja",
    "age": 4,
    "farmId": 2
  }'
```

### Scripts de prueba completos

```bash
# ============================================
# FARMS (GRANJAS)
# ============================================

# Obtener todas las granjas
curl -X GET http://localhost:3000/farms

# Obtener granja por ID
curl -X GET http://localhost:3000/farms/1

# Crear nueva granja
curl -X POST http://localhost:3000/farms \
  -H "Content-Type: application/json" \
  -d '{"name": "Granja Test", "location": "Test Location"}'

# Actualizar granja
curl -X PUT http://localhost:3000/farms/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Granja Actualizada"}'

# Eliminar granja
curl -X DELETE http://localhost:3000/farms/1

# Obtener animales de una granja
curl -X GET http://localhost:3000/farms/1/animals

# ============================================
# ANIMALS (ANIMALES)
# ============================================

# Obtener todos los animales
curl -X GET http://localhost:3000/animals

# Obtener animal por ID
curl -X GET http://localhost:3000/animals/1

# Crear nuevo animal
curl -X POST http://localhost:3000/animals \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "species": "vaca", "age": 2, "farmId": 1}'

# Actualizar animal
curl -X PUT http://localhost:3000/animals/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Test Actualizado", "age": 3}'

# Eliminar animal
curl -X DELETE http://localhost:3000/animals/1

# Obtener animal con su granja
curl -X GET http://localhost:3000/animals/1/with-farm

# Filtrar por especie
curl -X GET http://localhost:3000/animals/species/vaca
```

---

## ⚠️ Manejo de Errores

El sistema incluye manejo de errores apropiado:

### Error 404 - Not Found

```json
{
  "statusCode": 404,
  "message": "Granja con ID 999 no encontrada",
  "error": "Not Found"
}
```

### Error 400 - Bad Request (Validación)

```json
{
  "statusCode": 400,
  "message": [
    "El nombre del animal es obligatorio",
    "La edad no puede ser negativa"
  ],
  "error": "Bad Request"
}
```

### Error 400 - Bad Request (Granja no existe)

```json
{
  "statusCode": 400,
  "message": "No se puede crear el animal: La granja con ID 999 no existe",
  "error": "Bad Request"
}
```

---

## 📊 Diagrama de la Relación

```
┌─────────────────┐         ┌─────────────────┐
│      FARM       │         │     ANIMAL      │
│    (Granja)     │  1 : N  │    (Animal)     │
├─────────────────┤         ├─────────────────┤
│ PK id           │────────<│ FK farmId       │
│    name         │         │ PK id           │
│    location     │         │    name         │
│                 │         │    species      │
│                 │         │    age          │
└─────────────────┘         └─────────────────┘

Relación: Una Granja tiene Muchos Animales
          Muchos Animales pertenecen a una Granja
```

---

## ✅ Checklist del Examen

- [x] Proyecto 100% funcional con `npm install && npm run start:dev`
- [x] Relación 1 a Muchos correctamente implementada
- [x] Todos los endpoints CRUD funcionando
- [x] Validaciones en DTOs con class-validator
- [x] Manejo de errores con excepciones de NestJS
- [x] Código limpio y bien comentado en español
- [x] README claro y detallado
- [x] Fácil de entender e implementar

---

## 📞 Soporte

Si tienes alguna duda o problema:

1. Verifica que todas las dependencias estén instaladas: `npm install`
2. Asegúrate de que el puerto 3000 esté libre
3. Revisa los logs del servidor para ver errores detallados
4. Consulta la documentación oficial de [NestJS](https://docs.nestjs.com/)

---

**¡Éxito en tu examen! 🎉**
