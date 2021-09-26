import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "read book" },
    { id: 2, text: "Learn Context" },
    { id: 3, text: "Exersice" },
  ]);
  return (
    <TaskListContext.Provider value={{ tasks }}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
