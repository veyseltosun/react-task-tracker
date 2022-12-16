
import TaskItem from './TaskItem'


export default function Tasks({tasks, onDelete}) {
   
  return (
    
    <div>
        {tasks.map((task)=> {
            const{id, text, day, isDone} = task
            return(
                <TaskItem task={task} key={id} onDelete={onDelete}/>
            )
            
            

        })}
    </div>
  )
}
