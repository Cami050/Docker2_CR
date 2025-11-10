// Servidor web simple con Node.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('¡Hola desde Docker! 🚀');
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
