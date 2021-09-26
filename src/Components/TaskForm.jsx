import React from "react";

const TaskForm = () => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="task"
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
