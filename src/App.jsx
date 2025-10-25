import { useState } from 'react'
import './App.css'
import Habits from './components/Habits'
import AddHabit from './components/AddHabit'

// HOOKS : Special Function

function App() {

  return (
    <>
      <Habits/>
      <AddHabit/>
      <button>Add New</button>
    </>
  )
}

export default App
