import { useEffect, useState } from "react";

// Custom hook para gestionar tareas
export default function useTaskManager() {
  const [dataList, setDatalist] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("listTask"));
    if (storedTodos) {
      setDatalist(storedTodos);
    }
  }, []);

  const createTask = (text) => {
    if (text.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        text: text,
        completed: false,
      };
      setDatalist([...dataList, newTodo]);
      setInputValue("");
      localStorage.setItem("listTask", JSON.stringify([...dataList, newTodo]));
    }
  };

  const deleteTask = (id) => {
    const updatedDataList = dataList.filter((task) => task.id !== id);
    setDatalist(updatedDataList);
    localStorage.setItem("listTask", JSON.stringify(updatedDataList));
  };

  const updateTask = (id) => {
    const updatedDataList = dataList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setDatalist(updatedDataList);
    localStorage.setItem("listTask", JSON.stringify(updatedDataList));
  };

  return {
    dataList,
    inputValue,
    setInputValue,
    createTask,
    deleteTask,
    updateTask,
  };
}