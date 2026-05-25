const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 14 - Parte 3: Página de Empresa (empresa.html)', () => {
  const rootPath = path.join(__dirname, '../../');
  const empresaPath = path.join(rootPath, 'src', 'ejercicio-14', 'empresa.html');

  test('El archivo src/ejercicio-14/empresa.html debe existir', () => {
    expect(fs.existsSync(empresaPath)).toBe(true);
    const stats = fs.statSync(empresaPath);
    expect(stats.isFile()).toBe(true);
  });

  test('empresa.html debe tener estructura HTML5 básica', () => {
    expect(fs.existsSync(empresaPath)).toBe(true);
    const content = fs.readFileSync(empresaPath, 'utf8');
    expect(content).toMatch(/<!DOCTYPE\s+html>/i);
    expect(content).toMatch(/<html[^>]*>/i);
    expect(content).toMatch(/<head[^>]*>/i);
    expect(content).toMatch(/<\/head>/i);
    expect(content).toMatch(/<body[^>]*>/i);
    expect(content).toMatch(/<\/body>/i);
    expect(content).toMatch(/<\/html>/i);
  });

  test('empresa.html debe tener título', () => {
    const content = fs.readFileSync(empresaPath, 'utf8');
    expect(content).toMatch(/<title[^>]*>.*<\/title>/i);
  });

  test('empresa.html debe contener elemento header', () => {
    const content = fs.readFileSync(empresaPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    expect(document.querySelector('header')).toBeTruthy();
  });

  test('empresa.html debe contener elemento nav', () => {
    const content = fs.readFileSync(empresaPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    expect(document.querySelector('nav')).toBeTruthy();
  });

  test('empresa.html debe contener elemento main', () => {
    const content = fs.readFileSync(empresaPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    expect(document.querySelector('main')).toBeTruthy();
  });

  test('empresa.html debe contener al menos 3 elementos section', () => {
    const content = fs.readFileSync(empresaPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const sections = document.querySelectorAll('section');
    expect(sections.length).toBeGreaterThanOrEqual(3);
  });

  test('empresa.html debe contener elemento aside', () => {
    const content = fs.readFileSync(empresaPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    expect(document.querySelector('aside')).toBeTruthy();
  });

  test('empresa.html debe contener elemento footer', () => {
    const content = fs.readFileSync(empresaPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    expect(document.querySelector('footer')).toBeTruthy();
  });

  test('empresa.html debe contener enlaces de navegación a index.html y blog.html', () => {
    const content = fs.readFileSync(empresaPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const navLinks = document.querySelectorAll('nav a');
    
    const hrefs = Array.from(navLinks).map(link => link.getAttribute('href'));
    expect(hrefs.some(href => href && href.includes('index.html'))).toBe(true);
    expect(hrefs.some(href => href && href.includes('blog.html'))).toBe(true);
    expect(navLinks.length).toBeGreaterThanOrEqual(3);
  });
});
