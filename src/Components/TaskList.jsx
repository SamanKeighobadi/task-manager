import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import NoTask from "./NoTask";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length === 0 ? (
        <NoTask />
      ) : (
        <div>
          {tasks.map((task, index) => (
            <div key={index}>
              <Task task={task.text} id={task.id} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
