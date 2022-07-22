import './App.css';
import { useState, useEffect } from 'react'
import Task from './components/Task'
import TaskForm from './components/TaskForm'

function App() {
  const cachedItems = localStorage.getItem("stored-tasks")
  const [tasks, setTasks] = useState((cachedItems ? JSON.parse(cachedItems) : []))

  useEffect(() => {
    localStorage.setItem("stored-tasks", JSON.stringify(tasks))
  }, [tasks])

  console.log(tasks)

  function createTask(task) {
    console.log(task)
    setTasks([...tasks, task])
  }

  function deleteTask(index) {
    let newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <div className="App">
      <header className="App-header">
        <TaskForm addTask={createTask}/>
        {tasks.map((value, index) => {
          return <Task key={index} index={index} data={value} remove={deleteTask} />
        })}
      </header>
    </div>
  );
}

export default App;
