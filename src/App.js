import { initialState } from './store/initialState'
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(initialState)
  return (
    <div className='container'>
      <Header title="Task Tracker as Prop"/>
      <Tasks tasks={tasks}/>
     
    </div>
  );
}

export default App;
