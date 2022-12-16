import { initialState } from './store/initialState'
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState(initialState)
  const [isTaskBarShow, setIsTaskBarShow] = useState(false);


  // create a task
  const onCreate = (task) =>{
    const id = Date.now();
    const newTask = {id, ...task};
    setTasks((prevState) => [...prevState, newTask])
  }
  // Delete a task
  const onDelete = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))

  }
  // Toggle done
  const toggleDone = (id) =>{
    setTasks(
      tasks.map((task)=>{
        return task.id === id ? {...task, isDone: !task.isDone} : task
      })
    )

  }
  // toggle show and hide

  const toggleShow =() => {
    setIsTaskBarShow( prevState => !prevState);
  }



  return (
    <div className='container'>
      <Header title="Task Tracker" toggleShow={toggleShow} isTaskBarShow={isTaskBarShow}/>
      { isTaskBarShow &&<AddTask onCreate={onCreate}/> }
      {tasks.length > 0 ? 

      <Tasks tasks={tasks} onDelete={onDelete} toggleDone={toggleDone} />
      : (
        <p>No Task to show...</p>
      )
      }
     
    </div>
  ); 
}

export default App;
