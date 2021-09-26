import React, { createContext, useState } from "react";

export const TaskListContext = createContext({
    tasks:[],
    addNewTask:() => {},
    deleteTask:() => {}
});

const TaskListContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "read book" },
    { id: 2, text: "Learn Context" },
    { id: 3, text: "Exersice" },
  ]);

  const addNewTask = (text) => {
    setTasks([...tasks, { text, id: Math.floor(Math.random() * 1000) }]);
  };
  const deleteTask = id => {
      const filteredTask = tasks.filter(task => task.id !==id)
      setTasks(filteredTask)
  }

  return (
    <TaskListContext.Provider value={{ tasks ,addNewTask,deleteTask}}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
