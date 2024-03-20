const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = []; // Un arreglo para almacenar los usuarios

// Endpoint para obtener todos los usuarios
app.get('/users', (req, res) => {
  // TODO: Completar este endpoint para devolver el arreglo de usuarios como respuesta (código 200 OK)
});

// Endpoint para crear un nuevo usuario
app.post('/users', (req, res) => {
  // TODO: Completar este endpoint para agregar el nuevo usuario al arreglo de usuarios y devolverlo como respuesta (código 201 Created)
});

// Endpoint para actualizar un usuario existente por su ID
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  // Buscamos el usuario por su ID
  // TODO: Completar este bloque para buscar el usuario y actualizarlo si se encuentra, o devolver un código de estado 404 si no se encuentra
});

// Endpoint para eliminar un usuario por su ID
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  // Buscamos el usuario por su ID
  // TODO: Completar este bloque para buscar el usuario y eliminarlo del arreglo de usuarios si se encuentra, o devolver un código de estado 404 si no se encuentra
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
