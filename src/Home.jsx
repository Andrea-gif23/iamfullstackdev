import React, { useEffect, useState } from 'react';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tasks') // Ajusta la URL según tu backend
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;