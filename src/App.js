import { initialState } from './store/initialState'
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(initialState)

  // create a task
  // Delete a task
  const onDelete = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))

  }
  // Toggle done
  // toggle show and hide

  return (
    <div className='container'>
      <Header title="Task Tracker as Prop"/>
      <Tasks tasks={tasks} onDelete={onDelete} />
     
    </div>
  ); 
}

export default App;
