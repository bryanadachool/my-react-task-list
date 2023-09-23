import { useEffect, useState } from "react";

// Custom hook para gestionar tareas
export default function useTaskManager() {
  const [dataList, setDatalist] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputDescription, setInputDescription] = useState(""); // Agregar estado para la descripción

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("listTask"));
    if (storedTodos) {
      setDatalist(storedTodos);
    }
  }, []);

  const createTask = (text, description) => {
    if (text.trim() !== "" && text.length >= 3) { // Validación de nombre
      const newTodo = {
        id: new Date().getTime(),
        text: text,
        description: description, // Agregar descripción
        completed: false,
      };
      setDatalist([...dataList, newTodo]);
      setInputValue("");
      setInputDescription(""); // Limpiar la descripción
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
    inputDescription, // Agregar inputDescription al estado
    setInputValue,
    setInputDescription,
    createTask,
    deleteTask,
    updateTask,
   
  };
}