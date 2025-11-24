const express = require('express');
const app = express();
const path = require('path');

// Puerto donde correrá la app
const PORT = 3000;

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos (CSS, imágenes locales)
app.use(express.static(path.join(__dirname, 'public')));

// Función auxiliar para obtener la hora exacta
const getTimestamp = () => {
  return new Date().toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    fractionalSecondDigits: 3
  });
};

// --- RUTAS ---

// Ruta Inicio
app.get('/', (req, res) => {
  console.log(`[SERVER] Solicitud recibida en ruta '/' a las ${getTimestamp()}`);

  // Renderizamos la vista 'index' pasando datos dinámicos
  res.render('index', {
    titulo: 'Inicio (SSR)',
    timestamp: getTimestamp()
  });
});

// Ruta Mascota
app.get('/mascota', (req, res) => {
  console.log(`[SERVER] Solicitud recibida en ruta '/mascota' a las ${getTimestamp()}`);

  res.render('mascota', {
    titulo: 'Mi Gatita (SSR)',
    timestamp: getTimestamp()
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`\n--- Servidor SSR corriendo ---`);
  console.log(`Accede a: http://localhost:${PORT}`);
  console.log(`Observa la consola para ver cuándo el servidor renderiza una página.\n`);
});
