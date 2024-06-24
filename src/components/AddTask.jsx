import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/main.scss';
import axios from 'axios';

function AddTask({ addTask }) {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    AddDataToJsonFile({ text, dueDate, completed: false });
  };

  async function AddDataToJsonFile(newData) {
    try {
      const response = await axios.post('http://localhost:5100/task', newData);
      addTask(newData);

      setText('');
      setDueDate('');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Due date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTask;
