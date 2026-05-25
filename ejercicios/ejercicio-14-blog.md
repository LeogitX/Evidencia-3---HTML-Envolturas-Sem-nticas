# Ejercicio 14 - Parte 2: Página de Blog (blog.html)

### Instrucciones para visualizar:
1.  Asegúrate de tener la extensión Live Server instalada en VS Code.
2.  Haz clic derecho en el archivo `src/index.html` en el explorador de archivos.
3.  Selecciona "Open with Live Server".
4.  Navega a la página del blog usando el enlace correspondiente.

## Objetivo
Crear una página de blog utilizando envolturas semánticas de HTML5, incluyendo el uso de `<article>`.

## 🎯 Conceptos a evaluar:
- Uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- Estructura semántica para contenido de blog.

### Documentación
- [Elemento <article>](https://developer.mozilla.org/es/docs/Web/HTML/Element/article)

## Instrucciones
1.  Dentro de la carpeta `src/ejercicio-14`, crea un archivo llamado `blog.html`.
2.  **Estructura semántica requerida**:
    -   `<header>`: Título del blog y navegación.
    -   `<nav>`: Menú de navegación consistente con las otras páginas.
    -   `<main>`: Contenido principal de la página.
    -   `<section>`: Al menos 2 secciones dentro del `main`.
    -   `<article>`: Al menos 2 artículos de blog con título y contenido.
    -   `<aside>`: Barra lateral con "Artículos recientes" y "Categorías".
    -   `<footer>`: Pie de página consistente.

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
npm test tests/ejercicio/14-blog.test.js
```
