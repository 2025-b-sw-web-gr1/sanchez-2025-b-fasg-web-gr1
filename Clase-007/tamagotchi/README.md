# 🐾 Mascota Virtual (Tamagotchi)

Una aplicación web de mascota virtual construida con Ruby on Rails 7 y Hotwire (Turbo) que demuestra interactividad en tiempo real sin JavaScript complejo.

## 🚀 Características

- **Interactividad en Tiempo Real**: Hotwire Turbo actualiza solo las partes necesarias de la página
- **Animaciones CSS Nativas**: @keyframes para expresiones dinámicas del personaje
- **SVG Personalizado**: Personaje visual completamente customizable sin imágenes externas
- **Sistema de Decay Temporal**: La mascota pierde estadísticas con el tiempo
- **Estados Visuales**: El personaje cambia de apariencia según su estado emocional
- **Diseño Responsivo**: Funciona en dispositivos móviles y desktop

## ¿Por qué ERB es ideal para este Tamagotchi?

Renderizado Condicional Directo: ERB (Embedded Ruby) permite inyectar la lógica de decisión directamente en el HTML antes de que llegue al navegador. En un Tamagotchi, el estado cambia drásticamente: si la mascota está "viva", muestra botones de interacción; si está "muerta", muestra una lápida y un botón de reinicio. Con ERB, se usa un simple bloque <% if @pet.alive? %> ... <% else %> ... <% end %> para decidir qué HTML enviar. No se necesita ocultar/mostrar elementos con JavaScript; el servidor simplemente te entrega la página exacta que necesitas ver.

Persistencia y Cálculo de Tiempo Simplificado: Dado que un Tamagotchi sigue "viviendo" incluso cuando se cierra la pestaña del navegador, la lógica de tiempo es vital. Rails y ERB brillan aquí porque cada vez que se recarga la página (o haces click en "Alimentar"), Rails calcula en el servidor cuánto tiempo pasó desde la última visita, actualiza la base de datos y luego ERB "imprime" los nuevos valores de salud o hambre. Al usar ERB, se visualiza directamente el estado real de la base de datos en ese instante, garantizando que lo que se ve es siempre la "verdad" del servidor, sin problemas de sincronización con el navegador.

## 🛠️ Stack Tecnológico

- **Backend**: Ruby on Rails 7
- **Base de Datos**: SQLite
- **Frontend**: Hotwire (Turbo Frames)
- **Estilos**: CSS3 puro con animaciones
- **Gráficos**: SVG inline
- **Vistas**: ERB (Embedded Ruby)

## 📋 Instalación

### Prerrequisitos

- Ruby 3.0 o superior
- Rails 7.0 o superior
- Bundler

### Pasos de Instalación

1. **Clonar o descargar el proyecto**

2. **Instalar dependencias**

```bash
bundle install
```

3. **Configurar la base de datos**

```bash
rails db:migrate
```

4. **Iniciar el servidor**

```bash
bin/rails server
```

5. **Visitar la aplicación**
   Abre tu navegador en: `http://localhost:3000`

## 🎮 Cómo Usar

### Interacciones con la Mascota

- **🍎 Alimentar**: Reduce el hambre y aumenta energía y felicidad
- **⚽ Jugar**: Aumenta la felicidad pero consume energía y aumenta hambre
- **💤 Dormir**: Restaura energía pero aumenta el hambre

### Mecánicas del Juego

- **Decay Temporal**: La mascota pierde estadísticas cada minuto que pasa
  - Hambre: +0.5 por minuto
  - Energía: -0.3 por minuto
  - Felicidad: -0.2 por minuto

- **Estados de Muerte**:
  - Si hambre = 100
  - Si energía = 0

- **Estados Visuales**:
  - `happy`: Sube y rebota, color dorado
  - `hungry`: Tiembla, color rojo
  - `sleepy`: Respira lentamente, color azul
  - `bored`: Colgando, color marrón
  - `neutral`: Estado normal
  - `dead`: Escala de grises, boca invertida

## 🏗️ Estructura del Proyecto

```
app/
├── models/
│   └── pet.rb              # Modelo con lógica de decay temporal
├── controllers/
│   └── pets_controller.rb  # Controlador con acciones show/update
├── views/
│   ├── pets/
│   │   ├── show.html.erb   # Vista principal con Turbo Frame
│   │   └── _pet.html.erb   # Vista parcial que se recarga
│   └── layouts/
│       └── application.html.erb
├── assets/
│   └── stylesheets/
│       └── application.css # CSS con animaciones @keyframes
└── jobs/
    └── application_job.rb

config/
└── routes.rb               # Rutas para pets/show, pets/update, pets/create

db/
└── migrate/
    └── *_create_pets.rb    # Migración de base de datos
```

## 🔧 Archivos Principales

- **app/models/pet.rb**: Lógica del juego, métodos de interacción, decay temporal
- **app/controllers/pets_controller.rb**: Manejo de acciones y Turbo Streams
- **app/views/pets/\_pet.html.erb**: SVG del personaje y barra de estado
- **app/assets/stylesheets/application.css**: Animaciones y estilos visuales
- **config/routes.rb**: Configuración de rutas REST

## 🎨 Personalización

### Cambiar la Apariencia de la Mascota

Edita el SVG en `app/views/pets/_pet.html.erb` para cambiar:

- Forma del cuerpo
- Color de los ojos
- Expresiones de la boca
- Añadir detalles adicionales

### Modificar Animaciones CSS

Edita `app/assets/stylesheets/application.css` para:

- Cambiar velocidad de animaciones
- Añadir nuevos estados visuales
- Modificar colores y efectos

### Ajustar Mecánicas del Juego

Modifica `app/models/pet.rb` para:

- Cambiar tasas de decay temporal
- Añadir nuevas interacciones
- Modificar límites de estadísticas

## 🐛 Troubleshooting

### La mascota no se carga

- Verifica que la migración se ejecutó: `rails db:migrate`
- Crea una nueva mascota en la consola: `Pet.create_default`

### Problemas con Hotwire Turbo

- Verifica que @hotwired/turbo-rails esté en el Gemfile
- Reinicia el servidor después de cambios importantes

### Estilos CSS no se aplican

- Verifica que `app/assets/stylesheets/application.css` se carga
- Limpia cache: `rails assets:clobber && rails assets:precompile`

## 🚀 Despliegue

La aplicación está lista para desplegar en plataformas como Heroku, Render, o cualquier servicio que soporte Rails 7.

```bash
# Para producción
RAILS_ENV=production rails assets:precompile
```

