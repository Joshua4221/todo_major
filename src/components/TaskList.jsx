// import React from 'react'
import PropTypes from 'prop-types';
import Task from './Task';
import '../styles/main.scss';

function TaskList({ tasks, updateTask, deleteTask, title }) {
  console.log(tasks, 'falling in love');
  return (
    <div className="task-list">
      <h2>{title}</h2>
      {tasks?.map((task) => (
        <Task
          key={task?.id}
          task={task}
          // updateTask={updateTask}
          // deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      dueDate: PropTypes.string,
      completed: PropTypes.bool.isRequired,
      subTasks: PropTypes.arrayOf(PropTypes.object),
    })
  ).isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default TaskList;
