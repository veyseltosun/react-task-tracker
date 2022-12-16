
import TaskItem from './TaskItem'


export default function Tasks({tasks}) {
   
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
