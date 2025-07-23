import { useState } from 'react';
import PropTypes from 'prop-types';

export default function NewTaskForm({ onAddNewTask }) {
  const [newTask, setNewTask] = useState('');
  function handleChange(e) {
    const value = e.target.value;
    setNewTask(value);
  }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      onAddNewTask(newTask);
      setNewTask('');
    }
  }

  return (
    <header>
      <h1>todos</h1>
      <input
        type="text"
        className="new-todo"
        value={newTask}
        onChange={handleChange}
        onKeyDown={handleEnter}
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
}

NewTaskForm.propTypes = {
  onAddNewTask: PropTypes.func.isRequired,
};
