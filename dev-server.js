#!/usr/bin/env node

/**
 * Jednoduchý development server pro AI Chat App
 * Spouští lokální server pro vývoj
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Konfigurace serveru
const PORT = process.env.PORT || 3000;
const HOST = 'localhost';

// MIME typy
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Funkce pro získání MIME typu
function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || 'text/plain';
}

// Funkce pro čtení souboru
function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Funkce pro kontrolu existence souboru
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

// Vytvoření serveru
const server = http.createServer(async (req, res) => {
  try {
    const parsedUrl = url.parse(req.url);
    let filePath = parsedUrl.pathname;
    
    // Výchozí soubor
    if (filePath === '/') {
      filePath = '/index.html';
    }
    
    // Odstranění počátečního lomítka
    filePath = filePath.substring(1);
    
    // Mapování cest
    if (filePath.startsWith('src/')) {
      // Zdrojové soubory
      filePath = path.join(__dirname, filePath);
    } else if (filePath.startsWith('public/')) {
      // Public soubory
      filePath = path.join(__dirname, filePath);
    } else if (filePath.startsWith('assets/')) {
      // Asset soubory
      filePath = path.join(__dirname, filePath);
    } else {
      // Kořenové soubory
      filePath = path.join(__dirname, filePath);
    }
    
    // Kontrola existence souboru
    if (!fileExists(filePath)) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`
        <html>
          <head><title>404 - Soubor nenalezen</title></head>
          <body>
            <h1>404 - Soubor nenalezen</h1>
            <p>Požadovaný soubor: ${parsedUrl.pathname}</p>
            <p><a href="/">Zpět na hlavní stránku</a></p>
          </body>
        </html>
      `);
      return;
    }
    
    // Čtení souboru
    const data = await readFile(filePath);
    const mimeType = getMimeType(filePath);
    
    // Nastavení CORS hlaviček pro development
    res.writeHead(200, {
      'Content-Type': mimeType,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    
    res.end(data);
    
  } catch (error) {
    console.error('Server error:', error);
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head><title>500 - Server Error</title></head>
        <body>
          <h1>500 - Interní chyba serveru</h1>
          <p>${error.message}</p>
        </body>
      </html>
    `);
  }
});

// Spuštění serveru
server.listen(PORT, HOST, () => {
  console.log(`
🚀 AI Chat App - Development Server

📍 Lokální adresa: http://${HOST}:${PORT}
🌐 Veřejná adresa: http://0.0.0.0:${PORT}

📁 Struktura:
├── / (hlavní stránka)
├── /public/ (statické soubory)
├── /src/ (zdrojový kód)
└── /assets/ (obrázky, ikony)

💡 Tipy:
• Otevřete http://${HOST}:${PORT} v prohlížeči
• Pro mobilní testování použijte DevTools
• Ctrl+C pro ukončení serveru

🔧 Development nástroje:
• Designový systém: http://${HOST}:${PORT}/design_system.md
• Dokumentace: http://${HOST}:${PORT}/docs/DEVELOPMENT.md
• Konfigurace: http://${HOST}:${PORT}/src/config/config.js
  `);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Ukončuji development server...');
  server.close(() => {
    console.log('✅ Server úspěšně ukončen');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('\n👋 Ukončuji development server...');
  server.close(() => {
    console.log('✅ Server úspěšně ukončen');
    process.exit(0);
  });
}); 