# Formas de Cargar CSS - Proyecto Educativo

Este proyecto es una guía completa y educativa que demuestra todas las formas diferentes de cargar estilos CSS en una página web.

## 📋 Contenido

La aplicación incluye explicaciones y ejemplos prácticos de:

1. **Estilos Inline** - Usando el atributo `style`
2. **Estilos Internos** - Usando etiquetas `<style>` en el `<head>`
3. **Archivos Externos** - Usando `<link>` para archivos .css
4. **@import en CSS** - Importando estilos desde otros archivos CSS
5. **Optimizaciones** - preload, preconnect y otras técnicas de rendimiento

## 🚀 Iniciar el Servidor

### Prerrequisitos

- Node.js instalado en tu sistema

### Pasos para ejecutar

1. **Instalar dependencias:**

   ```bash
   npm install
   ```

2. **Iniciar el servidor:**

   ```bash
   npm start
   ```

   El servidor se ejecutará en `http://localhost:3000`

3. **Abrir en el navegador:**
   - Ve a `http://localhost:3000` para ver la aplicación
   - O ejecuta `npm run dev` para abrir automáticamente

## 📁 Estructura del Proyecto

```
css-loading-methods-demo/
├── package.json              # Configuración del proyecto Node.js
├── index.html                # Página principal con todos los ejemplos
├── styles/
│   ├── external-styles.css   # Estilos para demostrar carga externa
│   └── import-styles.css     # Estilos para demostrar @import
└── README.md                 # Este archivo
```

## 🎯 Objetivos Educativos

Este proyecto te ayuda a entender:

- **Especificidad CSS** - Qué estilos tienen prioridad
- **Cascada de estilos** - Cómo se aplican múltiples fuentes de estilos
- **Rendimiento** - Cuándo usar cada método para optimizar
- **Mantenibilidad** - Mejores prácticas para proyectos grandes
- **Organización** - Cómo estructurar tus archivos CSS

## 💡 Características

- ✅ **Diseño Responsivo** - Funciona en móvil y escritorio
- ✅ **Ejemplos Interactivos** - Botones y elementos con los que puedes hacer clic
- ✅ **Código Resaltado** - Syntax highlighting para mejor legibilidad
- ✅ **Explicaciones Detalladas** - Cada método incluye ventajas y desventajas
- ✅ **Comparación de Especificidad** - Visualización de la cascada de estilos

## 🔧 Tecnologías Utilizadas

- HTML5 semántico
- CSS3 moderno (Variables CSS, Flexbox, Grid)
- JavaScript vanilla para interactividad
- Node.js con http-server
- Google Fonts (Inter y JetBrains Mono)

## 📚 Recursos Adicionales

Para profundizar más en estos temas, consulta:

- [MDN - CSS Getting Started](https://developer.mozilla.org/es/docs/Web/CSS/Getting_Started)
- [MDN - CSS Cascade](https://developer.mozilla.org/es/docs/Web/CSS/Cascade)
- [Web.dev - CSS Performance](https://web.dev/learn/css/)

## 🤝 Contribuciones

Este es un proyecto educativo. Si encuentras errores o tienes sugerencias para mejorar el contenido, ¡siéntete libre de contribuir!

## 📝 Licencia

MIT License - Libre para uso educativo y comercial.

---

**Creado por MiniMax Agent** - Un proyecto educativo para aprender las diferentes formas de cargar CSS en aplicaciones web.
