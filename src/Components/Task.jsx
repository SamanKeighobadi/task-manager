import React,{useContext} from 'react';
import { TaskListContext } from '../context/TaskListContext';

const Task = ({task,id}) => {

    const {deleteTask} = useContext(TaskListContext)

    return (
        <div>
            <h3>{task} <span onClick={() => deleteTask(id)}>&times;</span></h3>
        </div>
    );
};

export default Task;