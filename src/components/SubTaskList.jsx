// import React from 'react';
import PropTypes from 'prop-types'
import SubTask from './SubTask'
import '../styles/main.scss'

function SubTaskList({ subTasks }) {
  return (
    <div className='subtask-list'>
      {subTasks.map((subTask) => (
        <SubTask key={subTask.id} subTask={subTask} />
      ))}
    </div>
  )
}

SubTaskList.propTypes = {
  subTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
}

export default SubTaskList
