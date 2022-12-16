import React, { useState } from 'react'
import { initialState } from '../store/initialState'
import TaskItem from './TaskItem'


export default function Tasks() {
    const [tasks, setTasks] = useState(initialState)
  return (
    
    <div>
        {tasks.map((task)=> {
            const{id, text, day, isDone} = task
            return(
                <TaskItem task={task} key={id}/>
            )
            
            

        })}
    </div>
  )
}
