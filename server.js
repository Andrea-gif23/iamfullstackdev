import express from 'express';
const app = express();
app.get('/tasks', (req, res) => {
  res.json([{ id: 1, title: "Tarea de prueba" }]);
});
app.listen(3000, () => console.log('Backend en http://localhost:3000'));