
import { useEffect,useState} from "react"
export default function Task(){
  const [dataList, setDatalist] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("listTask"));
    if (storedTodos) {
      setDatalist(storedTodos);
    }
  }, []);

 

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    localStorage.setItem("listTask", JSON.stringify(dataList));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
        completed: false
      };
      setDatalist([...dataList, newTodo]);
      setInputValue("");
    }
  };

  const handleTodoDelete = (id) => {
    setDatalist(dataList.filter((dataList) => dataList.id !== id));
  };

  const handleTodoComplete = (id) => {
    setDatalist(
      dataList.map((dataList) => {
        if (dataList.id === id) {
          return { ...dataList, completed: !dataList.completed };
        }
        return dataList;
      })
    );
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
              onChange={() => handleTodoComplete(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none"
              }}
            >
              {task.text}
            </span>
            <button onClick={() => handleTodoDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};