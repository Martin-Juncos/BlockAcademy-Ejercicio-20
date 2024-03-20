const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = []; // Un arreglo para almacenar los usuarios

// Endpoint para obtener todos los usuarios
app.get('/users', (req, res) => {
  res.status(200).json(users); // Devuelve el arreglo de usuarios como respuesta (código 200 OK)
});

// Endpoint para crear un nuevo usuario
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser); // Devuelve el nuevo usuario creado con código 201 Created
});

// Endpoint para actualizar un usuario existente por su ID
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  // Buscamos el usuario por su ID
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    res.status(404).send('Usuario no encontrado'); // Código 404 Not Found si no se encuentra el usuario
  } else {
    users[userIndex] = updatedUser;
    res.status(200).json(updatedUser); // Devuelve el usuario actualizado con código 200 OK
  }
});

// Endpoint para eliminar un usuario por su ID
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  // Buscamos el usuario por su ID
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    res.status(404).send('Usuario no encontrado'); // Código 404 Not Found si no se encuentra el usuario
  } else {
    const deletedUser = users.splice(userIndex, 1)[0];
    res.status(200).json(deletedUser); // Devuelve el usuario eliminado con código 200 OK
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
