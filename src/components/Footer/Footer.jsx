import './Footer.css';
import './../TasksFilter/TasksFilter';
import TasksFilter from './../TasksFilter/TasksFilter';
import PropTypes from 'prop-types';

export default function Footer({ tasksCount = 0, onDeleteCompletedTasks = () => {}, filterTasks }) {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksCount} items left</span>
      <TasksFilter onFilterTasks={filterTasks} />
      <button onClick={onDeleteCompletedTasks} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  tasksCount: PropTypes.number,
  onDeleteCompletedTasks: PropTypes.func,
  filterTasks: PropTypes.func,
};
