import React from 'react'
import { FaTimes } from "react-icons/fa"


function TaskItem({ task, onDelete }) {
    const { id, day, text, isDone } = task
    return (
        <div className={"task"}>
            <h3>
                {text}
                <FaTimes style={{ color: "red", cursor: 'pointer' }} onClick={() => onDelete(id)} />
            </h3>
            <p>{day}</p>
        </div>
    )
}

export default TaskItem