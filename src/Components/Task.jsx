import React, { useContext } from "react";
// Context
import { TaskListContext } from "../context/TaskListContext";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import PropTypes from 'prop-types'

const Task = ({ task, id }) => {
  const { deleteTask, findTask } = useContext(TaskListContext);

  return (
    <div className='my-3  flex justify-between align-middle'>
      <h3 className='text-white font-semibold'>{task}</h3>
      <div className='flex '>
        <span className='pr-3 text-red-500' onClick={() => deleteTask(id)}>
          <AiTwotoneDelete className=' cursor-pointer' />
        </span>{" "}
        <span className="text-blue-900" onClick={() => findTask(id)}>
          <AiTwotoneEdit className=' cursor-pointer' />
        </span>{" "}
      </div>
    </div>
  );
};

Task.propTypes = {
  taks:PropTypes.string,
  id:PropTypes.string
}

export default Task;
