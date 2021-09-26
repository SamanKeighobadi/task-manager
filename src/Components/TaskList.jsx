import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.map((task,index) => (
        <div key={index}>
          <Task task={task.text} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
