import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') {
      return task;
    } else if (filter === 'active') {
      return task.completed === false;
    } else {
      return task.completed === true;
    }
  });

  const unfinishedTasks = tasks.filter((task) => {
    return task.completed === false;
  });

  function checkTask(isChecked, id) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: isChecked };
        } else {
          return task;
        }
      });
    });
  }

  function deleteTask(id) {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => {
        return task.id !== id;
      });
    });
  }

  function addEditedTask(newTask, id) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title: newTask };
        } else {
          return task;
        }
      });
    });
  }

  function addNewTask(newTask) {
    setTasks((prevTasks) => {
      return [...prevTasks, { id: uuid(), title: newTask, completed: false }];
    });
  }

  function deleteCompleted() {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => {
        return task.completed === false;
      });
    });
  }

  return (
    <section className="todoapp">
      <NewTaskForm onAddNewTask={addNewTask} />
      <section className="main">
        <TaskList tasks={filteredTasks} onCheckTask={checkTask} onDeleteTask={deleteTask} onEditTask={addEditedTask} />
        <Footer tasksCount={unfinishedTasks.length} onDeleteCompletedTasks={deleteCompleted} filterTasks={setFilter} />
      </section>
    </section>
  );
}

export default App;
