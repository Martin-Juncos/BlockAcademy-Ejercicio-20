const express = require('express');
//const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

const tasks = []; // Un arreglo para almacenar las tareas (ToDo)

// Endpoint para obtener todas las tareas
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks); // Devuelve el arreglo de tareas como respuesta (código 200 OK)
});

// Endpoint para crear una nueva tarea
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask); // Devuelve la nueva tarea creada con código 201 Created
});

// Endpoint para actualizar una tarea existente por su ID
app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;

  // Buscamos la tarea por su ID
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex === -1) {
    res.status(404).send('Tarea no encontrada'); // Código 404 Not Found si no se encuentra la tarea
  } else {
    tasks[taskIndex] = updatedTask;
    res.status(200).json(updatedTask); // Devuelve la tarea actualizada con código 200 OK
  }
});

// Endpoint para eliminar una tarea por su ID
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;

  // Buscamos la tarea por su ID
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex === -1) {
    res.status(404).send('Tarea no encontrada'); // Código 404 Not Found si no se encuentra la tarea
  } else {
    const deletedTask = tasks.splice(taskIndex, 1)[0];
    res.status(200).json(deletedTask); // Devuelve la tarea eliminada con código 200 OK
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
