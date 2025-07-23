import Task from './../Task/Task';
import './TaskList.css';
import PropTypes from 'prop-types';

export default function TaskList({ tasks = [], onCheckTask, onDeleteTask, onEditTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            title={task.title}
            isCompleted={task.completed}
            onCheckTask={onCheckTask}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
            id={task.id}
          />
        );
      })}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
  onCheckTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onEditTask: PropTypes.func,
};
