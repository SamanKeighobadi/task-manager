import React, { createContext, useState } from "react";

export const TaskListContext = createContext({
  tasks: [],
  editTask: "",
  addNewTask: () => {},
  deleteTask: () => {},
  clearTask: () => {},
  findTask: () => {},
  EditTask: () => {},
});

const TaskListContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "read book" },
    { id: 2, text: "Learn Context" },
    { id: 3, text: "Exersice" },
  ]);

  const [editTask, setEditTask] = useState("");

  const addNewTask = (text) => {
    if (text !== "" && text !== " ") {
      setTasks([...tasks, { text, id: Math.floor(Math.random() * 1000) }]);
    }
  };
  const deleteTask = (id) => {
    const filteredTask = tasks.filter((task) => task.id !== id);
    setTasks(filteredTask);
  };

  const clearTask = () => {
    setTasks([]);
  };

  const findTask = (id) => {
    const dasm = tasks.find((task) => task.id === id);
    setEditTask(dasm);
  };

  const EditTask = (text, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { text, id } : text
    );

    setTasks(newTasks);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addNewTask,
        deleteTask,
        clearTask,
        findTask,
        EditTask,
        editTask,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
