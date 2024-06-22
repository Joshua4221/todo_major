import { useState } from 'react'
import PropTypes from 'prop-types'
import SubTaskList from './SubTaskList'
import '../styles/main.scss'

function Task({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(task.text)

  const handleComplete = () => {
    updateTask(task.id, { ...task, completed: !task.completed })
  }

  const handleUpdate = () => {
    updateTask(task.id, { ...task, text: newText })
    setIsEditing(false)
  }

  const handleDelete = () => {
    deleteTask(task.id)
  }

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type='text'
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleUpdate}
        />
      ) : (
        <span className='task-text' onClick={() => setIsEditing(true)}>
          {task.text}
        </span>
      )}
      {task.dueDate && <span className='task-due-date'>{task.dueDate}</span>}
      <input
        type='checkbox'
        checked={task.completed}
        onChange={handleComplete}
      />
      <button onClick={handleDelete} className='delete-task'>
        ✕
      </button>
      <SubTaskList subTasks={task.subTasks} />
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    dueDate: PropTypes.string,
    completed: PropTypes.bool.isRequired,
    subTasks: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
}

export default Task
