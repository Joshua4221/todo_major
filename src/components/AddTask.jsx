import { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/main.scss'

function AddTask({ addTask }) {
  const [text, setText] = useState('')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask({ text, dueDate, completed: false })
    setText('')
    setDueDate('')
  }

  return (
    <form className='add-task' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a task'
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Due date'
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type='submit'>Add Task</button>
    </form>
  )
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
}

export default AddTask
