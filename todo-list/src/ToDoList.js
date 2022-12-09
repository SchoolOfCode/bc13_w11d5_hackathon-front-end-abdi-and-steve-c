import React, { useState } from 'react'

function ToDoList(){
  const [todos, setTodos] = useState([])

  function addTodo(e){
    e.preventDefault()
    const todo = e.target.elements.todo.value
    setTodos([...todos, todo])
  }

  return(
    <div>
      <form onSubmit={addTodo}>
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}



export default ToDoList