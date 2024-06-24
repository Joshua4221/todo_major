import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import data from './data/data.json';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // setTasks(data);
    fetchTask();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, subTasks: [] }]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const fetchTask = async () => {
    try {
      const response = await axios.get('http://localhost:5100/task');

      console.log(response?.data, 'stingks');

      setTasks(response?.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="app">
      <AddTask addTask={addTask} />

      <TaskList
        tasks={tasks.filter((task) => !task.completed)}
        updateTask={updateTask}
        deleteTask={deleteTask}
        title="Tasks"
      />

      <TaskList
        tasks={tasks.filter((task) => task.completed)}
        updateTask={updateTask}
        deleteTask={deleteTask}
        title="Completed!"
      />
    </div>
  );
}

export default App;
