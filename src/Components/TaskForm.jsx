import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addNewTask, clearTask, editTask, EditTask } =
    useContext(TaskListContext);

  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!editTask) {
      addNewTask(text);
      setText("");
    } else {
      EditTask(text, editTask.id);
    }
  };

  useEffect(() => {
    if (editTask !== null) {
      setText(editTask.text);
    } else {
      setText(" ");
    }
  }, [editTask]);

  return (
    <div className="text-center">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="task"
          onChange={handleTextChange}
          value={text}
          autoComplete="off"
          autoFocus
          placeholder=" Add task ..."
          className="block w-11/12 mx-auto rounded-full px-3 py-1 shadow-sm focus:outline-none hover:shadow-lg mt-2"
        />
        <div className="flex justify-around my-5">
          <button
            type="submit"
            className="bg-green-700 py-0 px-4 rounded text-white hover:bg-green-600 "
          >
            {editTask ? "Edit" : "Add "}
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
