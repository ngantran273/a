import React from 'react';
import { FaTimes } from 'react-icons/fa'
// import TaskChild from './TaskChild'

const Task = ({task, onDelete}) => {
    return (
        <div className= 'task'>
            {task.map((task) => (
                <div key={task.id}> 
                    <h3>
                        {task.text} <FaTimes onClick={()=> onDelete(task.id)}/>
                    </h3>
                    <p> {task.day}</p>
                </div>
                ))}
        </div>
    )
}

export default Task

