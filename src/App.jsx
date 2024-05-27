import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'
import {Box} from '@mui/material'
import TaskManager from './components/TaskManager/TaskManager'

function App() {
  return (
    <>
      <div className="card">
        <TaskManager/>
      </div>
    </>
  );
}

export default App
