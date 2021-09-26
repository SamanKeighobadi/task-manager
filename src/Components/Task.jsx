import React, { useContext } from "react";
// Context
import { TaskListContext } from "../context/TaskListContext";
// React Icons
import {AiTwotoneDelete,AiTwotoneEdit} from 'react-icons/ai'

const Task = ({ task, id }) => {
  const { deleteTask, findTask } = useContext(TaskListContext);

  return (
    <div>
      <h3>
        {task} <span onClick={() => deleteTask(id)}><AiTwotoneDelete /></span>{" "}
        <span onClick={() => findTask(id)}><AiTwotoneEdit /></span>{" "}
      </h3>
    </div>
  );
};

export default Task;
