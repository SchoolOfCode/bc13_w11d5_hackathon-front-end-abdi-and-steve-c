import React, { useState, useEffect } from "react";

function ToDoList() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		async function getTodos() {
			const data = await fetch("http://localhost:3500/todos");
			const response = await data.json();

			setTodos(response.payload);
		}
		getTodos();
	}, []);

	function addTodo(e) {
		e.preventDefault();
		const todo = {
			task: e.target.elements.todo.value,
			completed: false,
		};
		setTodos([...todos, todo]);
    e.target.elements.todo.value = '';
	}

	function toggleTodo(index) {
		const newTodos = [...todos];
		newTodos[index].completed = !newTodos[index].completed;
		setTodos(newTodos);
	}

  function deleteTodo(index){
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

	return (
		<div className="ToDoList">
			<h1 className="Title">ToDoList</h1>
			<form onSubmit={addTodo}>
				<input type="text" name="todo" />
				<button type="submit">Add Todo</button>
			</form>
			<ul className="BulletList">
				{todos.map((todo, index) => (
					<li key={index}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >{todo.task}</span>
						
          <button type="submit" onClick={()=> deleteTodo(index)}>Delete Todo</button>
          <button type="submit" onClick={() => toggleTodo(index)} >Completed</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ToDoList;
