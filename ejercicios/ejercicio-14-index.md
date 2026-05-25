# Ejercicio 14 - Parte 1: Página Principal (index.html)

### Instrucciones para visualizar:
1.  Asegúrate de tener la extensión Live Server instalada en VS Code.
2.  Haz clic derecho en el archivo `src/index.html` en el explorador de archivos.
3.  Selecciona "Open with Live Server".
4.  Navega por los ejercicios usando los enlaces de la página principal.

## Objetivo
Crear la página principal de un sitio web utilizando las envolturas semánticas de HTML5.

## 🎯 Conceptos a evaluar:
- Uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`.
- Estructura semántica y navegación funcional.

### Documentación
- [Material didáctico sobre HTML Semántico](https://developer.mozilla.org/es/docs/Web/HTML/Element)

## Instrucciones
1.  Dentro de la carpeta `src/ejercicio-14`, crea un archivo llamado `index.html`.
2.  **Estructura semántica requerida**:
    -   `<header>`: Debe contener el título del sitio y la navegación principal.
    -   `<nav>`: Menú de navegación con enlaces a `index.html`, `blog.html`, y `empresa.html`.
    -   `<main>`: Contenido principal de la página.
    -   `<section>`: Al menos 2 secciones con información sobre el sitio.
    -   `<aside>`: Información complementaria.
    -   `<footer>`: Pie de página con información de derechos de autor.

### Estructura de carpetas esperada:
```
src/ejercicio-14/
├── index.html
├── blog.html
└── empresa.html
```

## Verificación
Puedes verificar tu trabajo ejecutando el siguiente comando en la terminal:
```bash
npm test tests/ejercicio/14-index.test.js
```
