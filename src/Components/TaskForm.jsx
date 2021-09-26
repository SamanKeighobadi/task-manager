import React, { useContext, useState } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addNewTask, clearTask } = useContext(TaskListContext);

  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addNewTask(text);
    setText("");
  };

  return (
    <div className="text-center">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="task"
          onChange={handleTextChange}
          autoFocus
          placeholder=" Add task ..."
          className="block w-11/12 mx-auto rounded-full px-3 py-1 shadow-sm focus:outline-none hover:shadow-lg mt-2"
        />
        <div className="flex justify-around my-5">
          <button
            type="submit"
            className="bg-green-700 py-0 px-4 rounded text-white hover:bg-green-600 "
          >
            Add
          </button>
          <button
            onClick={clearTask}
            className="bg-red-700 py-0 px-4 rounded text-white transition-all duration-150 hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
