# API de Gestión de Granja

API RESTful construida con NestJS, TypeORM y SQLite para la gestión de granjas y animales. Esta API permite realizar operaciones CRUD completas sobre granjas y animales, incluyendo la consulta de animales por granja.

## Características

- **NestJS**: Framework de Node.js para construir aplicaciones del lado del servidor.
- **TypeORM**: ORM para la gestión de la base de datos.
- **SQLite**: Base de datos ligera sin necesidad de configuración adicional.
- **Validación**: Uso de DTOs con class-validator para la validación de datos de entrada.
- **Relaciones**: Implementación de relaciones uno a muchos (1:N) entre Granjas y Animales.

## Requisitos Previos

- Node.js versión 18 o superior.
- npm o yarn como gestor de paquetes.

## Instalación

1. Clona el repositorio o navega al directorio del proyecto:

```bash
cd Proyecto-002
```

2. Instala todas las dependencias necesarias:

```bash
npm install
```

Este comando instalará automáticamente todas las dependencias definidas en el archivo `package.json`, incluyendo:

- `@nestjs/common`, `@nestjs/core`, `@nestjs/platform-express`: Paquetes principales de NestJS.
- `@nestjs/typeorm`: Integración de NestJS con TypeORM.
- `typeorm`: ORM para la gestión de la base de datos.
- `sqlite3`: Controlador de SQLite.
- `class-validator` y `class-transformer`: Para la validación de datos.
- `reflect-metadata`: Para el uso de decoradores en TypeScript.
- `rxjs`: Biblioteca Reactive Extensions para JavaScript.

## Configuración

El archivo `app.module.ts` ya está configurado para usar SQLite con las siguientes opciones:

```typescript
TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [Farm, Animal],
  synchronize: true,
}),
```

- **database**: El archivo de la base de datos se creará automáticamente como `db.sqlite` en la raíz del proyecto.
- **synchronize**: Configurado en `true` para sincronizar automáticamente el esquema de la base de datos con las entidades definidas.

## Estructura del Proyecto

```
Proyecto-002/
├── src/
│   ├── farm/
│   │   ├── farm.entity.ts          # Entidad Farm con TypeORM
│   │   ├── farm.dto.ts             # DTOs para validación de Farm
│   │   ├── farm.service.ts         # Servicio con lógica de negocio
│   │   ├── farm.controller.ts      # Controlador de rutas HTTP
│   │   └── farm.module.ts          # Módulo de Farm
│   ├── animal/
│   │   ├── animal.entity.ts        # Entidad Animal con TypeORM
│   │   ├── animal.dto.ts           # DTOs para validación de Animal
│   │   ├── animal.service.ts       # Servicio con lógica de negocio
│   │   ├── animal.controller.ts    # Controlador de rutas HTTP
│   │   └── animal.module.ts        # Módulo de Animal
│   ├── app.module.ts               # Módulo principal
│   └── main.ts                     # Punto de entrada
├── db.sqlite                       # Base de datos SQLite
├── package.json                    # Dependencias del proyecto
├── tsconfig.json                   # Configuración de TypeScript
└── nest-cli.json                   # Configuración de NestJS CLI
```

## Ejecución del Proyecto

### Modo Desarrollo (con recarga automática)

```bash
npm run start:dev
```

Este comando iniciará el servidor en modo de desarrollo con recarga automática cuando se detecten cambios en los archivos.

### Modo Producción

```bash
npm run build
npm run start:prod
```

Primero compila el proyecto y luego inicia el servidor en modo producción.

### Modo Normal

```bash
npm run start
```

Inicia el servidor sin modo de vigilancia.

El servidor estará disponible en: `http://localhost:3000`

## Endpoints de la API

### Endpoints de Granjas (Farms)

| Método | Endpoint             | Descripción                    |
| ------ | -------------------- | ------------------------------ |
| GET    | `/farms`             | Obtener todas las granjas      |
| GET    | `/farms/:id`         | Obtener una granja por ID      |
| POST   | `/farms`             | Crear una nueva granja         |
| PATCH  | `/farms/:id`         | Actualizar una granja          |
| DELETE | `/farms/:id`         | Eliminar una granja            |
| GET    | `/farms/:id/animals` | Obtener animales de una granja |

### Endpoints de Animales (Animals)

| Método | Endpoint                | Descripción                 |
| ------ | ----------------------- | --------------------------- |
| GET    | `/animals`              | Obtener todos los animales  |
| GET    | `/animals/:id`          | Obtener un animal por ID    |
| GET    | `/animals/farm/:farmId` | Obtener animales por granja |
| POST   | `/animals`              | Crear un nuevo animal       |
| PATCH  | `/animals/:id`          | Actualizar un animal        |
| DELETE | `/animals/:id`          | Eliminar un animal          |

## Ejemplos con curl

### Granjas (Farms)

#### Crear una nueva granja

```bash
curl -X POST http://localhost:3000/farms \
  -H "Content-Type: application/json" \
  -d '{"name": "Granja La Esperanza", "location": "Valle Central, San José"}'
```

#### Obtener todas las granjas

```bash
curl -X GET http://localhost:3000/farms
```

#### Obtener una granja por ID

```bash
curl -X GET http://localhost:3000/farms/1
```

#### Actualizar una granja

```bash
curl -X PATCH http://localhost:3000/farms/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Granja La Nueva Esperanza", "location": "Valle Central, San José"}'
```

#### Eliminar una granja

```bash
curl -X DELETE http://localhost:3000/farms/1
```

#### Obtener animales de una granja específica

```bash
curl -X GET http://localhost:3000/farms/1/animals
```

### Animales (Animals)

#### Crear un nuevo animal

```bash
curl -X POST http://localhost:3000/animals \
  -H "Content-Type: application/json" \
  -d '{"species": "Vaca", "age": 5, "farmId": 1}'
```

#### Obtener todos los animales

```bash
curl -X GET http://localhost:3000/animals
```

#### Obtener un animal por ID

```bash
curl -X GET http://localhost:3000/animals/1
```

#### Obtener animales por granja

```bash
curl -X GET http://localhost:3000/animals/farm/1
```

#### Actualizar un animal

```bash
curl -X PATCH http://localhost:3000/animals/1 \
  -H "Content-Type: application/json" \
  -d '{"age": 6, "species": "Vaca Lechera"}'
```

#### Eliminar un animal

```bash
curl -X DELETE http://localhost:3000/animals/1
```

## Ejemplo de Flujo Completo

### 1. Crear una granja

```bash
curl -X POST http://localhost:3000/farms \
  -H "Content-Type: application/json" \
  -d '{"name": "Granja San Juan", "location": "Zona Norte, Alajuela"}'
```

Respuesta esperada:

```json
{
  "id": 1,
  "name": "Granja San Juan",
  "location": "Zona Norte, Alajuela",
  "animals": []
}
```

### 2. Agregar animales a la granja

```bash
curl -X POST http://localhost:3000/animals \
  -H "Content-Type: application/json" \
  -d '{"species": "Caballo", "age": 7, "farmId": 1}'
```

```bash
curl -X POST http://localhost:3000/animals \
  -H "Content-Type: application/json" \
  -d '{"species": "Oveja", "age": 3, "farmId": 1}'
```

### 3. Ver los animales de la granja

```bash
curl -X GET http://localhost:3000/farms/1/animals
```

Respuesta esperada:

```json
{
  "id": 1,
  "name": "Granja San Juan",
  "location": "Zona Norte, Alajuela",
  "animals": [
    {
      "id": 1,
      "species": "Caballo",
      "age": 7,
      "farmId": 1,
      "farm": null
    },
    {
      "id": 2,
      "species": "Oveja",
      "age": 3,
      "farmId": 1,
      "farm": null
    }
  ]
}
```

## Entidades y Relaciones

### Entidad Farm (Granja)

| Campo    | Tipo     | Descripción                           |
| -------- | -------- | ------------------------------------- |
| id       | integer  | Identificador único (autoincremental) |
| name     | string   | Nombre de la granja                   |
| location | string   | Ubicación de la granja                |
| animals  | Animal[] | Relación uno a muchos con animales    |

### Entidad Animal (Animal)

| Campo   | Tipo    | Descripción                                        |
| ------- | ------- | -------------------------------------------------- |
| id      | integer | Identificador único (autoincremental)              |
| species | string  | Especie del animal                                 |
| age     | integer | Edad del animal                                    |
| farmId  | integer | ID de la granja a la que pertenece (clave foránea) |
| farm    | Farm    | Relación muchos a uno con granja                   |

### Relación entre Entidades

La relación entre Farm y Animal es de uno a muchos (1:N):

- Una **Granja** puede tener muchos **Animales**.
- Un **Animal** pertenece a una sola **Granja**.

Esta relación se implementa en TypeORM usando los decoradores `@OneToMany` y `@ManyToOne`:

```typescript
// En Farm (uno a muchos)
@OneToMany(() => Animal, (animal) => animal.farm)
animals: Animal[];

// En Animal (muchos a uno)
@ManyToOne(() => Farm, (farm) => farm.animals, { onDelete: 'SET NULL' })
@JoinColumn({ name: 'farm_id' })
farm: Farm;
```

## Licencia

Este proyecto está bajo la licencia MIT.
