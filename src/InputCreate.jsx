import React, { useState } from 'react';

const InputCreate = () => {
  const [taskTitle, setTaskTitle] = useState(''); // Estado para el input

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/create', { // Ajusta la URL según tu backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: taskTitle }), // Enviamos el título como objeto { title }
      });

      if (response.ok) {
        alert('¡Tarea añadida!');
        setTaskTitle(''); // Limpia el input
      } else {
        throw new Error('Error al crear la tarea');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar la tarea');
    }
  };

  return (
    <div>
      <h2>Añadir nueva tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Escribe una tarea..."
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default InputCreate;