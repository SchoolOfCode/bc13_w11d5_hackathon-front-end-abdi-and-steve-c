import React from 'react'
import './App.css';
import ToDoList from './ToDoList'

const url = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:3500'


function App() {
  console.log(url)
  return (
   
    < ToDoList url={url}/>
  )
}

export default App
