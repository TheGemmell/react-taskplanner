import './App.css';
import { useState, useEffect } from 'react'
import Task from './components/Task'
import TaskForm from './components/TaskForm'

function App() {
  const [ tasks, setTasks ] = useState([])

  useEffect(() => {
    let cachedItems = localStorage.getItem("stored-tasks")
    cachedItems = JSON.parse(cachedItems)
    if (cachedItems.length > 0) {
      console.log("Found something!")
      setTasks([...cachedItems])
    }
  }, [])

  console.log(tasks)

  function updateCache() {
    localStorage.setItem("stored-tasks", JSON.stringify(tasks))
  }

  function createTask(task) {
    console.log(task)
    setTasks([...tasks, task])
    updateCache()
  }

  return (
    <div className="App">
      <header className="App-header">
        <TaskForm addTask={createTask}/>
        {tasks.map((value, index) => {
          return <Task data={value} />
        })}
      </header>
    </div>
  );
}

export default App;
