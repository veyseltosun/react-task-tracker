import React from 'react'
import { FaTimes } from "react-icons/fa"


function TaskItem({ task, onDelete, toggleDone }) {
    const { id, day, text, isDone } = task
    return (
        <div className={`task ${isDone ? "done": ""}`} onDoubleClick={() => toggleDone(id)}>
            <h3>
                {text}
                <FaTimes style={{ color: "red", cursor: 'pointer' }} onClick={() => onDelete(id)} />
            </h3>
            <p>{day}</p>
        </div>
    )
}

export default TaskItem