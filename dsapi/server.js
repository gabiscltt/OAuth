const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');

  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      res.statusCode = 500;
      res.end('Erro interno do servidor');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(content);
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
