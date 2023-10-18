import { Button } from"@chakra-ui/react";
import useTaskManager from "../useTaskManager";
export default function Task(){
  const {
    dataList,
    inputValue,
    descriptionValue, // Nuevo estado para la descripción
    setInputValue,
    setDescriptionValue, // Nueva función para actualizar la descripción
    createTask,
    deleteTask,
    updateTask,
  } = useTaskManager();

  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createTask(inputValue, descriptionValue);
  
  setInputValue("");
  setDescriptionValue("");
  }

  return (
    <div className="task-container">
    <h2>Task List</h2>
    <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add to list task.."
          required
        />
        <textarea
          value={descriptionValue}
          onChange={handleDescriptionChange}
          placeholder="Add a description..."
        />
        <Button type="submit" colorScheme="blue">Add</Button>
      </form>

      <ul>
      {dataList.map((task) => (
  <li key={task.id}>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => updateTask(task.id)}
    />
    <div>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>
      <p>{task.description}</p> {/* Muestra la descripción de la tarea */}
    </div>
    <button onClick={() => deleteTask(task.id)}>Delete</button>
  </li>
        ))}
      </ul>
  </div>
  );
};