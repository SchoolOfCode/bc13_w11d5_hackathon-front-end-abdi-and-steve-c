import React, { useState } from 'react'

function ToDoList(){
  const [todos, setTodos] = useState([])

  function addTodo(e){
    e.preventDefault()
    const todo = e.target.elements.todo.value
    setTodos([...todos, todo])
  }

  return(
    <div className="ToDoList">
    <h1 className="Title">ToDoList</h1>
      <form onSubmit={addTodo}>
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul className='BulletList'>
        {todos.map((todo, index) => (
          <li key={index}>{todo.task}</li>
        ))}
      </ul>
    </div>
  )
}



export default ToDoList