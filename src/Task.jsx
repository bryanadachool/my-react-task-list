
import { useEffect,useState} from "react"
import useTaskManager from "./components/useTaskManager";
export default function Task(){
  const {
    dataList,
    inputValue,
    setInputValue,
    createTask,
    deleteTask,
    updateTask,
  } = useTaskManager();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createTask(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>LIST TASK</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add to list task.."
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
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};