# Tennis for Two - Juego WebGL

Una recreación moderna del clásico juego Tennis for Two de 1958 usando WebGL, Web Audio API y JavaScript moderno.

## Características

- **Renderizado WebGL**: Gráficos 2D acelerados por hardware con jugabilidad fluida a 60fps
- **Audio Procedural**: Sonidos estilo chiptune de 8 bits generados con Web Audio API
- **Diseño Responsivo**: Canvas en pantalla completa que se adapta a cualquier tamaño de pantalla
- **Jugabilidad Clásica**: Física y controles auténticos del juego original
- **Mejoras Modernas**: Funcionalidad de pausa/reinicio y mejoras visuales

## Controles

- **Jugador 1 (Izquierda)**: Teclas W/S para movimiento arriba/abajo
- **Jugador 2 (Derecha)**: Teclas ↑/↓ para movimiento arriba/abajo
- **Control del Juego**: Barra espaciadora para pausar/reanudar o reiniciar después del fin del juego

## Reglas del Juego

- El primer jugador en anotar 5 puntos gana
- La pelota se acelera ligeramente después de cada golpe con la paleta
- El ángulo de reflexión depende de dónde golpea la pelota a la paleta
- La pelota rebota en las paredes, la red y las paletas

## Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 16 o superior)
- Navegador web moderno con soporte WebGL

### Configuración

1. **Clonar o descargar los archivos del proyecto**

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**

   ```bash
   npm run dev
   ```

4. **Abrir tu navegador** y navegar a `http://localhost:3000`

### Compilar para Producción

```bash
npm run build
```

Los archivos compilados estarán en el directorio `dist/`, listos para ser servidos por cualquier servidor web estático.

## Detalles Técnicos

### Arquitectura

- **Vite.js**: Herramienta de compilación moderna para desarrollo rápido
- **Módulos ES6**: Estructura de código limpia y modular
- **WebGL**: Renderizado de gráficos 2D acelerado por hardware
- **Web Audio API**: Generación de sonido procedural
- **RequestAnimationFrame**: Bucle de juego fluido a 60fps

### Estructura del Código

```
tennis-for-two/
├── index.html          # Archivo HTML principal con canvas
├── main.js            # Inicialización del juego y bucle principal
├── webgl-utils.js     # Utilidades de renderizado WebGL
├── game-objects.js    # Clases Ball, Paddle y Court
├── game-logic.js      # Lógica del juego y detección de colisiones
├── input-handler.js   # Manejo de entrada de teclado
├── audio-system.js    # Generación de sonido con Web Audio API
├── vite.config.js     # Configuración de Vite
└── package.json       # Dependencias del proyecto
```

### Compatibilidad de Navegadores

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

Todos los navegadores modernos con soporte para WebGL y Web Audio API.

## Desarrollo

El juego está construido con JavaScript vanilla (sin frameworks) y usa características modernas de ES6+. El código está organizado en módulos separados para:

- **Renderizado**: Utilidades WebGL para dibujar objetos del juego
- **Objetos del Juego**: Clases Ball, Paddle y Court con física
- **Lógica del Juego**: Detección de colisiones, puntuación y gestión del estado del juego
- **Audio**: Generación de sonido procedural con Web Audio API
- **Entrada**: Manejo de teclado para ambos jugadores

## Agradecimientos

Inspirado en el Tennis for Two original (1958) de William Higinbotham.
Creado con tecnologías web modernas con fines educativos y de entretenimiento.
