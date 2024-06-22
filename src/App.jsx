import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import data from './data/data.json'

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, subTasks: [] }])
  }

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='app'>
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks.filter((task) => !task.completed)}
        updateTask={updateTask}
        deleteTask={deleteTask}
        title='Tasks'
      />
      <TaskList
        tasks={tasks.filter((task) => task.completed)}
        updateTask={updateTask}
        deleteTask={deleteTask}
        title='Completed!'
      />
    </div>
  )
}

export default App
