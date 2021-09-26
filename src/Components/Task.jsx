import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

const Task = ({ task, id }) => {
  const { deleteTask, findTask } = useContext(TaskListContext);

  return (
    <div>
      <h3>
        {task} <span onClick={() => deleteTask(id)}>&times;</span>{" "}
        <button onClick={() => findTask(id)}>Edit</button>{" "}
      </h3>
    </div>
  );
};

export default Task;
