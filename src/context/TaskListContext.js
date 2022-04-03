import React, { createContext, useState } from "react";
import uuidv4 from "uuid/v4";
import { toast } from "react-toastify";

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
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState("");

  /**
   * 
   * @param {string} text new task content
   */
  const addNewTask = (text) => {
    if (text !== "" && text !== " ") {
      setTasks([...tasks, { text, id: uuidv4() }]);
      // toastify
      toast.success("Task Added", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        theme: "colored",
      });
    }
  };

  /**
   * 
   * @param {string} id id of task which we want to delete
   */
  const deleteTask = (id) => {
    const filteredTask = tasks.filter((task) => task.id !== id);
    setTasks(filteredTask);
    // toastify
    toast.error("Task Removed", {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      closeButton: true,
      theme: "colored",
      icon: false,
    });
  };

  const clearTask = () => {
    setTasks([]);
    // toastify
    toast.error("All Tasks Cleared", {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      theme: "colored",
      icon: false,
    });
  };

  /**
   * 
   * @param {string} id id of task which we want to delete
   */
  const findTask = (id) => {
    const taskFound = tasks.find((task) => task.id === id);
    setEditTask(taskFound);
  };

  /**
   * 
   * @param {string} text content of task which we want to edit
   * @param {string} id id of task which we want to delete
   */
  const EditTask = (text, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { text, id } : task
    );

    setTasks(newTasks);
    setEditTask(null);

    // toastify
    toast.info("Task succefully Edit !", {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      theme: "colored",
      icon: false,
    });
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        editTask,
        addNewTask,
        deleteTask,
        clearTask,
        findTask,
        EditTask,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
