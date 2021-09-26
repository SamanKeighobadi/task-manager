import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length === 0 ? (
        <h1>NO Taks</h1>
      ) : (
        <div>
          {tasks.map((task, index) => (
            <div key={index}>
              <Task task={task.text} id={task.id} />
            </div>
          ))}
        </div>
      )}
      {/* {tasks.map((task,index) => (
        <div key={index}>
          <Task task={task.text} id={task.id}/>
        </div>
      ))} */}
    </div>
  );
};

export default TaskList;
