import React, { useState } from 'react';
import '../../App.css'
import {TextField, IconButton} from '@mui/material';
import add from '../../assets/ic_add.svg'
import {Todo} from "../Todo/Todo"

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Recordatorio de comprar despensa', date: 'Mar 1, 2023' }
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;

    const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const today = new Date();
    const date = `${today.toLocaleString('default', { month: 'short' })} ${today.getDate()}, ${today.getFullYear()}`;
    const task = { id: newId, title: newTask, date: date };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
    <div style={{ padding: '20px', maxWidth: '400px', width: '100%', marginTop:'40px'}}>
      <h2 className='text'>Tasks</h2>
      <div>
        {tasks.map(task => (
          <Todo
            task = {task}
            deleteTask = {() => deleteTask(task.id)}
          />
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px'}}>
      <TextField
      variant="outlined"
      type="text"
      placeholder="Add a task"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      sx={{
        height: '50px',
        flexGrow: 1,
        backgroundColor: '#ffffff',
        '& .MuiOutlinedInput-root': {
          borderRadius: '14px',
          height: '90%',
        },
        '& .MuiOutlinedInput-input': {
          height: '100%',
          padding: '14px',
        },
      }}
      InputProps={{
        endAdornment: (
          <IconButton onClick={addTask} edge="end">
            <img src={add} alt="Add" />
          </IconButton>
        ),
      }}
    />
      </div>
    </div>
  </div>
  );
};

export default TaskManager;
