import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "read book" },
    { id: 2, text: "Learn Context" },
    { id: 3, text: "Exersice" },
  ]);

  const addNewTask = (text) => {
    setTasks([...tasks, { text, id: Math.floor(Math.random() * 1000) }]);
  };

  return (
    <TaskListContext.Provider value={{ tasks ,addNewTask}}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
