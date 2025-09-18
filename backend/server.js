const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Servir la carpeta frontend normalmente
app.use(express.static(path.join(__dirname, '../frontend')));
// Servir la carpeta assets desde la raíz
app.use('/assets', express.static(path.join(__dirname, '../frontend/assets')));
app.post('/api/contacto', (req, res) => {
  res.json({ success: true, message: 'Mensaje recibido. ¡Gracias por contactarnos!' });
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
