import React, { useState, useEffect } from "react";

function ToDoList({url}) {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		async function getTodos() {
			const data = await fetch(`${url}/todos`);
			const response = await data.json();

			setTodos(response.payload);
		}
		getTodos();
	}, [url]);

  
	async function addTodo(e) {
		e.preventDefault();
		const todo = {
			task: e.target.elements.todo.value,
			completed: false,
		};
    const data = await fetch(`${url}/todos`,
    {method: 'POST',
    headers: {"Content-Type": "application/json"}, 
    body: JSON.stringify(todo)
    });
    const response = await data.json();
    if (response.success === true) {
      setTodos([...todos, response.payload]);
    }



    e.target.elements.todo.value = '';
	}

	async function toggleTodo(index) {
		const id  = todos[index].id;
		const data = await fetch(`${url}/todos/${id}`,
		{method: 'PATCH',
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({completed: !todos[index].completed})
		})
		const response = await data.json();
		if (response.success === true)	{
			const newTodos = [...todos];
			newTodos[index].completed = !newTodos[index].completed;
			setTodos(newTodos);
		}
		
	}

  async function deleteTodo(index){
    const id = todos[index].id;
    const data = await fetch(`${url}/todos/${id}`,
    {method: 'DELETE',
    headers: {"Content-Type": "application/json"}})
   
    const response = await data.json();
    if (response.success === true) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
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
