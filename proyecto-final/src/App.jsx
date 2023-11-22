import React, { useEffect, useState } from 'react'

import './App.css'
import { TaskForm, TaskList } from './components'

function App() {
  const [tasks, setTasks] = useState([])
  const [currentTasks, setCurrentTask] = useState([])
  const [searchString, setSearchString] = useState('')
  const addTask = (task) =>{
    setTasks([...tasks, task])
  }
  const deleteTask = (taskId) =>{
    setTasks(tasks.filter(task => task.id != taskId))
  }

  const handleFilterChange = (e) =>{
    setSearchString(e.target.value)
  }
  
  useEffect(() =>{
    setCurrentTask(tasks.filter(task => task.title.toLowerCase().includes(searchString.toLowerCase())))
  }, [searchString, tasks])

  return (
    <>
      <input placeholder='Busca la tarea...' value={searchString} onChange={handleFilterChange}/>
      <TaskForm addTask={addTask}/>
      <TaskList currentTasks={currentTasks} tasks={tasks} searchString={searchString} deleteTask={deleteTask}/>
    </>
  )
}

export default App
