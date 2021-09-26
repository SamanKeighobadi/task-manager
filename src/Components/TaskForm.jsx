import React, { useContext, useState } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addNewTask } = useContext(TaskListContext);

  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addNewTask(text);
    setText('')
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="task"
          onChange={handleTextChange}
          required
          autoFocus
          placeholder=" task ..."
        />
        <button type="submit">Add</button>
        <button>Clear</button>
      </form>
    </div>
  );
};

export default TaskForm;
