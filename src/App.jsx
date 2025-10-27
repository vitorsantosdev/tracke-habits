import { useState } from 'react'
import './App.css'
import Habits from './components/Habits'
import AddHabit from './components/AddHabit'

// HOOKS : Special Function

function App() {

  return (
    <div className='bg-slate-100 w-screen h-screen p-6'>
    <AddHabit/>
    <Habits/>    
    </div>
  )
}

export default App
