import React, { useState } from 'react'

function ToDoList(){
  const [todos, setTodos] = useState([])
  

  function addTodo(e){
    e.preventDefault()
      const todo = {
      text: e.target.elements.todo.value,
      completed: false,
    }
    setTodos([...todos, todo])
  }

  function toggleTodo(index){
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
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
          <li key={index} onClick={()=> toggleTodo(index)}>{todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}



export default ToDoList