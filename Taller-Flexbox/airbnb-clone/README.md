# Airbnb Clone - SPA

Un clon de Airbnb desarrollado como Single Page Application (SPA) usando JavaScript vanilla y Vite. Este proyecto replica las funcionalidades principales de búsqueda, filtrado y visualización de propiedades de Airbnb con un diseño moderno y responsivo.

## ✨ Características

- **SPA (Single Page Application)** con navegación fluida
- **Diseño responsivo** que se adapta a todos los dispositivos
- **Búsqueda y filtrado** de propiedades por tipo, ubicación y huéspedes
- **Interfaz moderna** inspirada en el diseño actual de Airbnb
- **Componentes reutilizables** para mejor organización del código
- **Datos simulados** realistas para demostración
- **Flexbox layout** para un diseño flexible y adaptable

## 🛠️ Tecnologías Utilizadas

- **Vite** - Herramienta de construcción rápida
- **JavaScript ES6+** - Programación modular moderna
- **CSS3** - Flexbox, variables CSS, animaciones
- **HTML5** - Estructura semántica y accesible
- **SVG Icons** - Iconografía escalable

## 📁 Estructura del Proyecto

```
airbnb-clone/
├── index.html              # Página principal
├── package.json            # Dependencias y scripts
├── vite.config.js          # Configuración de Vite
├── styles/
│   └── main.css           # Estilos principales
├── scripts/
│   └── main.js            # Lógica de la aplicación
└── assets/
    └── icons/             # Iconos SVG
        ├── airbnb-logo.svg
        ├── search-icon.svg
        ├── user-icon.svg
        └── favicon.svg
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Git

## 📝 Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la build
- `npm run lint` - Ejecutar linter de JavaScript
- `npm run format` - Formatear código con Prettier

## 🎨 Funcionalidades Principales

### 1. Búsqueda y Filtrado

- **Búsqueda por ubicación** - Encuentra propiedades por ciudad o región
- **Filtros por tipo** - Casas, apartamentos, villas, cabañas
- **Filtros por huéspedes** - Solo muestra propiedades que soporten el número de huéspedes
- **Fechas de check-in/check-out** - Preparado para integración futura con API real

### 2. Interfaz de Usuario

- **Navegación responsiva** - Adaptada para móvil, tablet y desktop
- **Búsqueda móvil modal** - Interfaz optimizada para dispositivos móviles
- **Carrusel de imágenes** - Navegación entre fotos de cada propiedad
- **Sistema de favoritos** - Marca propiedades como favoritas
- **Tarjetas de propiedades** - Información clara y atractiva

### 3. Componentes Reutilizables

- **PropertyCard** - Tarjeta individual de propiedad
- **SearchForm** - Formulario de búsqueda (desktop y móvil)
- **FilterTabs** - Pestañas de filtrado por tipo
- **FavoriteButton** - Botón de favoritos
- **ImageCarousel** - Carrusel de imágenes

### 4. Datos Simulados

El proyecto incluye 12 propiedades simuladas con:

- Imágenes de alta calidad (Unsplash)
- Información realista (ubicaciones, precios, ratings)
- Múltiples amenidades por propiedad
- Variedad de tipos de propiedades

## 🔧 Personalización

### Variables CSS

El proyecto utiliza variables CSS personalizadas en `styles/main.css`:

```css
:root {
  --primary-500: #ff385c;
  --primary-700: #d90b63;
  --page-bg: #f7f7f7;
  /* ... más variables */
}
```

### Agregar Nuevas Propiedades

Editar el array `mockProperties` en `scripts/main.js`:

```javascript
const mockProperties = [
  {
    id: 13,
    title: 'Tu nueva propiedad',
    location: 'Ciudad, País',
    type: 'apartamento',
    rating: 4.8,
    reviews: 50,
    price: 75,
    guests: 4,
    images: ['url-de-imagen-1', 'url-de-imagen-2', 'url-de-imagen-3'],
    amenities: ['WiFi', 'Cocina', 'Parking'],
    description: 'Descripción de la propiedad'
  }
];
```

## 🐛 Solución de Problemas

### Problema: Puerto ya en uso

```bash
# Cambiar puerto en vite.config.js
server: {
  port: 3001  // Usar otro puerto
}
```

### Problema: Imágenes no cargan

- Verificar que las URLs de imágenes sean válidas
- Las imágenes de Unsplash requieren URLs con parámetros de tamaño

### Problema: Estilos no se aplican

- Verificar que `main.css` esté correctamente referenciado en `index.html`
- Revisar la consola del navegador para errores de CSS

## 📄 Licencia

Este proyecto es solo para fines educativos. Airbnb es una marca registrada de Airbnb, Inc.

