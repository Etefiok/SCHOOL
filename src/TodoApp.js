import React, { useState } from 'react';
import './TodoApp.css';

const AddTask = ({ addTask }) => {
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    if (description.trim() !== '') {
      addTask({
        id: Math.random().toString(36).substr(2, 9),
        description: description,
        isDone: false,
      });
      setDescription('');
    }
  };

  return (
    <div >
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

const ListTask = ({ tasks, filter }) => {
  return (
    <div>
      {tasks
        .filter((task) => (filter === 'done' ? task.isDone : !task.isDone))
        .map((task) => (
          <Task key={task.id} task={task} />
        ))}
    </div>
  );
};

const Task = ({ task }) => {
  const [isEditing, setIsEditing,] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEditTask = () => {
    if (isEditing) {
        // onEditTask(task.id, editedDescription);
        setIsEditing(false);
      } else {
        setIsEditing(true);
      }
  };

  return (
    <div >
      {isEditing ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <span >{task.description}</span>
      )}

<button onClick={handleEditTask}>
        {isEditing ? 'Save' : 'Edit'}
      </button>

      {/* <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button> */}
    </div>
  );
};

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleEditTask = (taskId, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, description: newDescription } : task
    );
    setTasks(updatedTasks);
  };


  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className='todocon'>
      <AddTask addTask={addTask} />
      <ListTask tasks={tasks} filter={filter} onEditTask={handleEditTask} />
      <div className='todo'>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('notDone')}>Not Done</button>
      </div>
     
    </div>
  );
};

export default TodoApp;