import { useState } from 'react';
import './TasksFilter.css';
import PropTypes from 'prop-types';

export default function TasksFilter({ onFilterTasks = () => {} }) {
  const [isSelected, setIsSelected] = useState({
    allBtn: true,
    activeBtn: false,
    completedBtn: false,
  });

  function handleFilterClick(e) {
    const name = e.target.name;
    setIsSelected({
      allBtn: name === 'allBtn',
      activeBtn: name === 'activeBtn',
      completedBtn: name === 'completedBtn',
    });
    filterTasks(name);
  }

  function filterTasks(btnName) {
    if (btnName === 'allBtn') {
      onFilterTasks('all');
    } else if (btnName === 'activeBtn') {
      onFilterTasks('active');
    } else {
      onFilterTasks('completed');
    }
  }

  return (
    <ul className="filters">
      <li>
        <button className={isSelected.allBtn ? 'selected' : undefined} name="allBtn" onClick={handleFilterClick}>
          All
        </button>
      </li>
      <li>
        <button className={isSelected.activeBtn ? 'selected' : undefined} name="activeBtn" onClick={handleFilterClick}>
          Active
        </button>
      </li>
      <li>
        <button
          className={isSelected.completedBtn ? 'selected' : undefined}
          name="completedBtn"
          onClick={handleFilterClick}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

TasksFilter.propTypes = {
  onFilterTasks: PropTypes.func,
};
