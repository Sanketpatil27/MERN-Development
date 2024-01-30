import { useEffect, useState } from 'react'
import './App.css'

function App() {
	const [id, setId] = useState(4);

	return (
		<div>
			<button onClick = {() => { setId(1) }} > 1 </button>
			<button onClick = {() => { setId(2) }} > 2 </button>
			<button onClick = {() => { setId(3) }} > 3 </button>

			<Todo id={id} > </Todo>
		</div>
	)
}

function Todo({ id }) {
	const [todo, setTodo] = useState({});

	useEffect(() => {
		fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
		.then(async (res) => {
			const json = await res.json();
			setTodo(json.todo);
		})
	}, [id]);	// if id changes it will re-render

	return <div>
		<p> Id: {id} </p>
		<h1> {todo.title} </h1>
		<h5> {todo.description} </h5>
	</div>
}

export default App
