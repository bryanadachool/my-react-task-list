import { useState } from "react";
import useTaskManager from "./components/useTaskManager";
export default function Task(){
  const {
    dataList,
    inputValue,
    inputDescription, // Agregar inputDescription al estado
    setInputValue,
    setInputDescription,
    createTask,
    deleteTask,
    updateTask,
    
  } = useTaskManager();
  
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDescriptionChange = (e) => { // Manejar cambios en la descripción
    setInputDescription(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createTask(inputValue, inputDescription); // Pasar la descripción al crear tarea
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>LIST TASK</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Task Name" // Cambiar el placeholder
          minLength={3} // Validación de nombre mínimo de 3 caracteres
          required // Campo requerido
        />
        <textarea
          value={inputDescription} // Agregar inputDescription al valor
          onChange={handleDescriptionChange} // Manejar cambios en la descripción
          placeholder="Task Description" // Placeholder para la descripción
        />
        <button type="submit">Add</button>
      </form>
     
      <ul>
        {dataList.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => updateTask(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <p>{task.description}</p> {/* Mostrar la descripción */}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};