// import React from 'react';
import PropTypes from 'prop-types'
import '../styles/main.scss'

function SubTask({ subTask }) {
  return (
    <div className='subtask'>
      <span>{subTask.text}</span>
      <input type='checkbox' checked={subTask.completed} readOnly />
    </div>
  )
}

SubTask.propTypes = {
  subTask: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
}

export default SubTask
