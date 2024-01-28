import { useEffect, useState } from 'react'

function App() {
	const [todos, setTodos] = useState([]);	// without predefining array this map function will give error

	// as we know only this fetch will send infinite request to the backend server, so we use useEffect Hook
	// it will allow to run this on dependancy array
	// fetch("https://sum-server.100xdevs.com/todos")
	// .then(async(res) => {
	// 	const json = await res.json();
	// 	setTodos(json.todos);	// every time set new array of todos from backend
	// })

	useEffect(() => {
		setInterval(() => {
			console.log('it runs 2 times on mount? because of strict Mode');
			fetch("https://sum-server.100xdevs.com/todos")
			.then(async(res) => {
				const json = await res.json();
				setTodos(json.todos);	// every time set new array of todos from backend
			})
		}, 5000);
	}, [])	
	// here the second parameter is dependancy array, we can pass there any value, if that value 
	// changes then the useEffect will run again, if its array is empty then useEffect will run only 
	// on mount, means only once

    return (
        <div>
			{todos.map((value) => <Todo key={value.id} todo={value} /> )}
		</div>
    )
}

function Todo({ todo }) {
	return (
		<div>
			<h1> {todo.title} </h1>
			<h5> {todo.description} </h5> 
		</div>
	)
}

export default App
