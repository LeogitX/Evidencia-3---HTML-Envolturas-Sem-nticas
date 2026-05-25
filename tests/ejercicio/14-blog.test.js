const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 14 - Parte 2: Página de Blog (blog.html)', () => {
  const rootPath = path.join(__dirname, '../../');
  const blogPath = path.join(rootPath, 'src', 'ejercicio-14', 'blog.html');

  test('El archivo src/ejercicio-14/blog.html debe existir', () => {
    expect(fs.existsSync(blogPath)).toBe(true);
    const stats = fs.statSync(blogPath);
    expect(stats.isFile()).toBe(true);
  });

  test('blog.html debe tener estructura HTML5 básica', () => {
    expect(fs.existsSync(blogPath)).toBe(true);
    const content = fs.readFileSync(blogPath, 'utf8');
    expect(content).toMatch(/<!DOCTYPE\s+html>/i);
    expect(content).toMatch(/<html[^>]*>/i);
    expect(content).toMatch(/<head[^>]*>/i);
    expect(content).toMatch(/<\/head>/i);
    expect(content).toMatch(/<body[^>]*>/i);
    expect(content).toMatch(/<\/body>/i);
    expect(content).toMatch(/<\/html>/i);
  });

  test('blog.html debe tener título', () => {
    const content = fs.readFileSync(blogPath, 'utf8');
    expect(content).toMatch(/<title[^>]*>.*<\/title>/i);
  });

  test('blog.html debe contener elemento header', () => {
    const content = fs.readFileSync(blogPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    expect(document.querySelector('header')).toBeTruthy();
  });

  test('blog.html debe contener elemento nav', () => {
    const content = fs.readFileSync(blogPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    expect(document.querySelector('nav')).toBeTruthy();
  });

  test('blog.html debe contener elemento main', () => {
    const content = fs.readFileSync(blogPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    expect(document.querySelector('main')).toBeTruthy();
  });

  test('blog.html debe contener al menos 2 elementos section', () => {
    const content = fs.readFileSync(blogPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const sections = document.querySelectorAll('section');
    expect(sections.length).toBeGreaterThanOrEqual(2);
  });

  test('blog.html debe contener al menos 2 elementos article', () => {
    const content = fs.readFileSync(blogPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const articles = document.querySelectorAll('article');
    expect(articles.length).toBeGreaterThanOrEqual(2);
  });

  test('blog.html debe contener elemento aside', () => {
    const content = fs.readFileSync(blogPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    expect(document.querySelector('aside')).toBeTruthy();
  });

  test('blog.html debe contener elemento footer', () => {
    const content = fs.readFileSync(blogPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    expect(document.querySelector('footer')).toBeTruthy();
  });

  test('blog.html debe contener enlaces de navegación a index.html y empresa.html', () => {
    const content = fs.readFileSync(blogPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const navLinks = document.querySelectorAll('nav a');
    
    const hrefs = Array.from(navLinks).map(link => link.getAttribute('href'));
    expect(hrefs.some(href => href && href.includes('index.html'))).toBe(true);
    expect(hrefs.some(href => href && href.includes('empresa.html'))).toBe(true);
    expect(navLinks.length).toBeGreaterThanOrEqual(3);
  });
});
