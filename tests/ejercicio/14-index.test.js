const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 14 - Parte 1: Página Principal (index.html)', () => {
  const rootPath = path.join(__dirname, '../../');
  const indexPath = path.join(rootPath, 'src', 'ejercicio-14', 'index.html');

  test('La carpeta src/ejercicio-14 debe existir', () => {
    const docsPath = path.join(rootPath, 'src/ejercicio-14');
    expect(fs.existsSync(docsPath)).toBe(true);
    const stats = fs.statSync(docsPath);
    expect(stats.isDirectory()).toBe(true);
  });

  describe('Archivo index.html', () => {
    test('El archivo src/ejercicio-14/index.html debe existir', () => {
      expect(fs.existsSync(indexPath)).toBe(true);
      const stats = fs.statSync(indexPath);
      expect(stats.isFile()).toBe(true);
    });

    test('index.html debe tener estructura HTML5 básica', () => {
      expect(fs.existsSync(indexPath)).toBe(true);
      const content = fs.readFileSync(indexPath, 'utf8');
      expect(content).toMatch(/<!DOCTYPE\s+html>/i);
      expect(content).toMatch(/<html[^>]*>/i);
      expect(content).toMatch(/<head[^>]*>/i);
      expect(content).toMatch(/<\/head>/i);
      expect(content).toMatch(/<body[^>]*>/i);
      expect(content).toMatch(/<\/body>/i);
      expect(content).toMatch(/<\/html>/i);
    });

    test('index.html debe tener título', () => {
      const content = fs.readFileSync(indexPath, 'utf8');
      expect(content).toMatch(/<title[^>]*>.*<\/title>/i);
    });

    test('index.html debe contener elemento header', () => {
      const content = fs.readFileSync(indexPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('header')).toBeTruthy();
    });

    test('index.html debe contener elemento nav', () => {
      const content = fs.readFileSync(indexPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('nav')).toBeTruthy();
    });

    test('index.html debe contener elemento main', () => {
      const content = fs.readFileSync(indexPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('main')).toBeTruthy();
    });

    test('index.html debe contener al menos 2 elementos section', () => {
      const content = fs.readFileSync(indexPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      const sections = document.querySelectorAll('section');
      expect(sections.length).toBeGreaterThanOrEqual(2);
    });

    test('index.html debe contener elemento aside', () => {
      const content = fs.readFileSync(indexPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('aside')).toBeTruthy();
    });

    test('index.html debe contener elemento footer', () => {
      const content = fs.readFileSync(indexPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      expect(document.querySelector('footer')).toBeTruthy();
    });

    test('index.html debe contener enlaces de navegación a blog.html y empresa.html', () => {
      const content = fs.readFileSync(indexPath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      const navLinks = document.querySelectorAll('nav a');
      
      const hrefs = Array.from(navLinks).map(link => link.getAttribute('href'));
      expect(hrefs.some(href => href && href.includes('blog.html'))).toBe(true);
      expect(hrefs.some(href => href && href.includes('empresa.html'))).toBe(true);
    });
  });
});
