import React from 'react'

function TaskItem({task}) {
    const{id, day, text, isDone} = task
  return (
    <div>
        <h3>{text}</h3>
        <p>{day}</p>
    </div>
  )
}

export default TaskItem